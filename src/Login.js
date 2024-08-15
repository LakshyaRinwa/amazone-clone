import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword
import { auth } from "./firebase"; // Ensure this import is correct

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword( auth, email, password) // Correct usage of auth
            .then((userCredential) => {
                // Signed in
                console.log(userCredential);
                navigate('/'); // Redirect to home page
            })
            .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

       createUserWithEmailAndPassword(  auth, email, password) // Use the imported function here
            .then((userCredential) => {
                // User is created
                navigate('/');
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt="Amazon Logo"
                />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;