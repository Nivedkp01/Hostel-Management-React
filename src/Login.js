import React, { useState,useContext } from 'react';


import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { firebaseApp } from './config';

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleLogin= async (e)=>{
    e.preventDefault()
    

const auth = getAuth(firebaseApp);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('Signed In')
    const user = userCredential.user;
    navigate('/');
    alert("Successfully Logged In")
    
    // ...
  })
  .catch((error) => {
    alert(error.message)
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }
  return (
    <div>
      <div className="loginParentDiv">
        
        <form onSubmit={handleLogin}>
            <h3 className='he'>Login</h3>
        <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
            placeholder='Email'
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
            placeholder='Password'
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Not have an account?</Link>
      </div>
    </div>
  );
}

export default Login;
