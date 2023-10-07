import React, { useState } from 'react'
import './style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// import auth from '../../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const auth = getAuth();
    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password).then((usercredential) => {
            const user = usercredential.user
            console.log(user);
            navigate("/1");
            toast.success('User signup successful!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000, // Auto close the toast after 2 seconds
            });
        }).catch((err) => {
            const ecode = err.code;
            const emessage = err.message;
            console.log(ecode, emessage);
            // Show an error toast message
            toast.error(`Error: ${ecode} - ${emessage}`, {
                position: toast.POSITION.TOP_CENTER,
            });
        })

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
                <div className="grid-container">
                    <div className="grid-item g1">
                        <h1>Boards.</h1>
                        <p></p>
                    </div>
                    <div className="grid-item">
                        <div className="centered">
                            <h2>SignUP</h2>
                            <p>Create your account</p>
                            <div className="button-social">
                                <button className="google-button"><i className="fab fa-google"></i>Sign Up with Google</button>
                                <button className="apple-button"><i className="fab fa-apple"></i>Sign Up with Apple</button>
                            </div>
                            <div className="formContainer">
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <p>Email</p>
                                        <input type="email" id="email" name="email" label='EMAIL ADDRESS' value={email || ''} onChange={handleEmailChange} required placeholder='email adress' />
                                    </div>
                                    <div className="form-group">
                                        <p>Password</p>
                                        <input type="password" id="password" name="password" label='create password' value={password || ''} onChange={handlePasswordChange} required placeholder='Password' />
                                    </div>
                                    <p><a href="/forgot-password">Forgot Password?</a></p>
                                    <button type="submit" onClick={onSubmit}>Sign Up</button>
                                </form>
                                <p>I have an account... <NavLink to={'/'}>Login here</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Signup