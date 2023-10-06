import React, { useState } from 'react'
import './style.css';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });

  }

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
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <p>Password</p>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p><a href="/forgot-password">Forgot Password?</a></p>
                <button type="submit" onClick={onLogin}>Log In</button>
              </form>

              <p>Don't have an account? <NavLink to={'/signup'}>Register here</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login