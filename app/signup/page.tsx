'use client';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '@/app/context/Firebase';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebase();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log('User is Signing in...');
      const result = await firebase.signUpUserWithEmailAndPassword(
        email,
        password
      );
      console.log('Successfull..', result);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (firebase.isLoggedIn) {
      router.push('/');
    }
  }, [firebase, router]);

  return (
    <div className="mt-5 w-full flex flex-col flex-grow rounded items-center">
      <h2 className="text-4xl mb-8">Register User</h2>
      <Form onSubmit={handleSubmit} className="w-1/3 flex-wrap">
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
        <Button
          style={{
            backgroundColor: '#313131',
            border: 'none',
            marginTop: '10px',
            padding: '8px',
            width: '8rem',
          }}
          type="submit"
        >
          Create User
        </Button>

        <div className="mt-6">
          Already a user?{' '}
          <span
            className="text-lime-800 cursor-pointer"
            onClick={() => router.push('/signin')}
          >
            Sign in
          </span>
        </div>
      </Form>
    </div>
  );
};

export default Register;
