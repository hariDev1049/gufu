'use client';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { FaGit, FaGithub, FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebase();
  const navigate = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log('User is Signing in...');
      await firebase.signInUserWithEmailAndPassword(email, password);
      console.log('Successfully Signed In..');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log('Signing user with Google');
      await firebase.signInUserWithGoogle();
      console.log('Login Successfull..!');
    } catch (error) {
      console.log('Error in logging in with Google');
    }
  };

  const handleGitSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log('Signing user with Google');
      await firebase.signInUserWithGoogle();
      console.log('Login Successfull..!');
    } catch (error) {
      console.log('Error in logging in with Google');
    }
  };

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate.push('/');
    }
  }, [firebase, navigate]);

  return (
    <div className="mt-5 w-full flex flex-col flex-grow rounded items-center">
      <h2 className="text-4xl mb-8">User Login</h2>
      <Form onSubmit={handleSubmit} className="w-3/7 flex-wrap">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Group className="mt-4 flex gap-7">
          <Button
            style={{
              backgroundColor: '#313131',
              border: 'none',
              marginTop: '10px',
              padding: '8px',
              width: '6rem',
            }}
            type="submit"
          >
            Login
          </Button>
          <Button variant="" onClick={handleGoogleSubmit} className="h-8">
            <div className="flex gap-2 items-center border-2 border-red-500 p-2 rounded justify-start">
              <FaGoogle className="text-2xl" /> Sign in with Google
            </div>
          </Button>

          <Button variant="" onClick={handleGitSubmit} className="h-9">
            <div className="flex gap-2 items-center border-2 border-slate-900 p-2 rounded justify-start">
              <FaGithub className="text-2xl" /> Sign in with Git
            </div>
          </Button>
        </Form.Group>
        <div className="mt-10">
          Don't have an account?{' '}
          <span
            className="text-lime-800 cursor-pointer"
            onClick={() => navigate.push('/signup')}
          >
            Create one
          </span>
        </div>
      </Form>
    </div>
  );
};

export default Login;
