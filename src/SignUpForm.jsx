import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Correct import from Firebase
import './Style.css';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2>Signup</h2>
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
        <button type='submit'>login</button>
        <p>
          Already Registered? <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
