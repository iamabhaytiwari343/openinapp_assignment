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
            navigate("/");
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
                <div className="left">
                    <h1 className="head">Board.</h1>
                </div>
                <div className="leftmobile">
                    <h1 className="head">Board.</h1>
                </div>

                <div className="right">

                    <div className="ccentre">
                        <h1 className="title">Sign UP</h1>
                        <p className="gsign">Signup For  Account</p>
                        <div className="minicontainer">
                            <div className="gcontainer">
                                <img className="gimage" src="https://res.cloudinary.com/dbx7qfdwo/image/upload/v1696670881/image8-2.jpg_kxct7t.jpg" alt="Google" />
                                <button className="gtitle">Signup with Google</button>
                            </div>
                            <div className="acontainer">
                                <img className="aimage" src="https://res.cloudinary.com/dbx7qfdwo/image/upload/v1696671121/_1511456315_653_apple-mobile_whwlf6.jpg" alt="Apple" />
                                <button className="atitle">Signup with Apple</button>
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
                            <button className="signin-button" type="submit" onClick={onSubmit}>Sign UP</button>
                        </form>
                        <div className="register">
                            <p className="text-description">I have my account.</p>
                            <button className="register-link" type="button"><NavLink to={'/'}>  Login here</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default Signup