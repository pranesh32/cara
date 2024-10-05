import React from 'react'
import './CSS/login.css';
function Login() {
  return (
    <div className='login'>
      <div className='container'>
        <h1 className='heading'>Login or Sign up</h1>
        <div className='fields'>
          <input type='text' placeholder='Your Name'></input>
          <input type='password' placeholder='Password'></input>
          <input type='email' placeholder='Email'></input>
        </div>
        <button>CONTINUE</button>
        <div className='b'>
        <p> Already have an account ? Login here  </p>
        <div className='agree'>
        <input type='checkbox'></input>
         <p>By Signing In, I agree to Terms and Conditions</p>
        </div>
        </div>
          
      </div>
    </div>
  );
}

export default Login