


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Correct import from Firebase
import './Style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("login suceesfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor='email'>
          Email
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)} // Corrected onChange
            name='email'
            id='email'
          />
        </label>

        <label htmlFor='password'>
          Password
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)} // Corrected onChange
            name='password'
            id='password'
          />
        </label>
        <button type='submit'>Login</button>
        <p>
        Dont have Account <Link to='/'>Registered</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;