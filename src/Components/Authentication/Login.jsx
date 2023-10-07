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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <h1 className="head">Board.</h1>
        </div>
        <div className="leftmobile">
          <h1 className="head">Board.</h1>
        </div>

        <div className="right">

          <div className="ccentre">
            <h1 className="title">Sign In</h1>
            <p className="gsign">Sign in to your account</p>
            <div className="minicontainer">
              <div className="gcontainer">
                <img className="gimage" src="https://res.cloudinary.com/dbx7qfdwo/image/upload/v1696670881/image8-2.jpg_kxct7t.jpg" alt="Google" />
                <button className="gtitle">Sign in with Google</button>
              </div>
              <div className="acontainer">
                <img className="aimage" src="https://res.cloudinary.com/dbx7qfdwo/image/upload/v1696671121/_1511456315_653_apple-mobile_whwlf6.jpg" alt="Apple" />
                <button className="atitle">Sign in with Apple</button>
              </div>
            </div>
            <form className="form-container">
              <div className="input">
                <label htmlFor="email" className="label">Email address</label>
                <input id="email" type="text" className="format" placeholder="example@example.com" onChange={handleEmailChange} />
              </div>
              <div className="input">
                <label htmlFor="password" className="label">Password</label>
                <input id="password" type="password" className="format" placeholder="Password" onChange={handlePasswordChange} />
              </div>
              <p className="forget-password">Forgot password?</p>
              <button className="signin-button" type="submit" onClick={onLogin}>Sign In</button>
            </form>
            <div className="register">
              <p className="text-description">Don’t have an account?</p>
              <button className="register-link" type="button"><NavLink to={'/signup'}>Register here</NavLink></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login