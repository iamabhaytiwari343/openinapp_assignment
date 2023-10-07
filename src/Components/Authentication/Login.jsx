import React, { useState } from 'react'
import './style.css';
import { signInWithEmailAndPassword,getAuth} from 'firebase/auth';
import '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const onLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
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
      <div className="container g1">
        <div className="grid-item left">
          <p className='logo'>LOGO</p>
          <h1>Boards.</h1>
          <p>Your platform for collaboration</p>
        </div>
        <div className="grid-item">
          <div className="centered">
            <h2>Login</h2>
            <p>Sign in with your account</p>
            <div className="button-social">
              <button className="google-button">Sign In with Google</button>
              <button className="apple-button">Sign In with Apple</button>
            </div>


            <div className="formContainer">
              <form action="#" method="post">
                <div className="form-group">
                  <label htmlFor="email-address">Email</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
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