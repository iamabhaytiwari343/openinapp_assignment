import React,{useState} from 'react'
import './style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  
  return (
    <>
      <div class="container">
        <div class="grid-container">
          <div class="grid-item g1">
            <h1>Boards.</h1>
            <p>Your platform for collaboration</p>
          </div>
          <div class="grid-item">
            <div class="centered">
              <h2>Login</h2>
              <p>Sign in with your account </p>
              <div class="button-social">
                <button class="google-button"><i class="fab fa-google"></i>Sign In with Google</button>
                <button class="apple-button"><i class="fab fa-apple"></i>Sign In with Apple</button>
              </div>
              <form action="#" method="post">
                <div class="form-group">
                  <p>Email</p>
                  <input type="email" id="email" name="email" />
                </div>
                <div class="form-group">
                  <p>Password</p>
                  <input type="password" id="password" name="password" />
                </div>
                <p><a href="/forgot-password">Forgot Password?</a></p>
                <button type="submit">Sign In</button>
              </form>

              <p>Don't have an account? <NavLink to={'/2'}>Register here</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login