'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import app from '@/app/Config/firebaseConfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const firebaseAuth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props: any) => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUserLoggedIn(user);
      else setUserLoggedIn(null);
    });
  }, []);

  const isLoggedIn = userLoggedIn ? true : false;

  const signUpUserWithEmailAndPassword = (email: any, password: any) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUserWithEmailAndPassword = (email: any, password: any) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUserWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };

  const signMeOut = async () => {
    await signOut(firebaseAuth);
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signInUserWithGoogle,
        isLoggedIn,
        signMeOut,
        userLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
