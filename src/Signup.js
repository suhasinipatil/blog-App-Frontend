import React, { useState } from 'react';
import styles from './styles/Signup.module.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [bioError, setBioError] = useState('');

    const handleUsernameBlur = () => {
        setError("");
        if (username.trim() === '') {
            setUsernameError("Username cannot be empty");
            setUsername("");
        } else {
            setUsernameError("");
        }
    };

    const handlePasswordBlur = () => {
        setError("");
        if (password.trim() === '') {
            setPasswordError("Password cannot be empty");
            setPassword("");
        } else {
            setPasswordError("");
        }
    };

    const handleEmailBlur = () => {
        setError("");
        if (email.trim() === '') {
            setEmailError("Email cannot be empty");
            setEmail("");
        } else if (!email.includes('@gmail.com')) {
            setEmailError('Email should be a Gmail account');
        }
        else {
            setEmailError("");
        }
    };

    const handleBioChange = (e) => {
        const newBio = e.target.value;
        if (newBio.trim() === 0) {
            setBioError('Bio should not have empty spaces');
        }
        else if (newBio.length < 10) {
            setBioError('Bio should be at least 10 characters');
        } else if (newBio.length > 100) {
            setBioError('Bio should not be more than 100 characters');
        } else {
            setBioError('');
        }
        setBio(newBio);
    };

    const handleSignup = () => {
        // Create an object with the user's signup data
        const userData = {
            username: username,
            password: password,
            email: email,
            bio: bio,
        };
        //console.log(JSON.stringify(userData));
        // Make the API request
        fetch('http://localhost:8888/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data);
                // Redirect to the home page
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                if (error instanceof SyntaxError && error.message.includes("Unexpected token")) {
                    setError("Username has already been taken");
                } else {
                    setError(error.message);
                }
            });
    };

    return (
        <div>
            <div>
                <h1 className={styles.signUpHeaderStyle}>Sign Up to Blog App</h1>
            </div>
            <div className={styles.errorDiv}>
                {usernameError}<br />
                {passwordError}<br />
                {emailError}<br />
                {bioError}
            </div>
            <div className={styles.form}>
                <table>
                    <tr>
                        <td>
                            <h4 className={styles.labelStyle}>Username</h4>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={usernameError ? styles.invalid : styles.inputStyle}
                                onBlur={handleUsernameBlur}
                            />
                        </td>
                        <td>
                            <h4 className={styles.labelStyle}>Password</h4>
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={passwordError ? styles.invalid : styles.inputStyle}
                                onBlur={handlePasswordBlur}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <h4 className={styles.labelStyle}>Email</h4>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={emailError ? styles.invalid : styles.inputStyle}
                                onBlur={handleEmailBlur}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <h4 className={styles.labelStyle}>Bio</h4>
                            <textarea
                                type="rich text"
                                value={bio}
                                onChange={handleBioChange}
                                className={styles.bioInputStyle}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button
                                onClick={handleSignup}
                                disabled={usernameError || passwordError || emailError}
                                className={styles.buttonStyle}
                            >Create Account</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <p className={styles.loginText}>Already have an account? <a href="/login">Login</a></p>
                        </td>
                    </tr>
                </table>
                {error && (
                    <div className={styles.errorContainer}>
                        <p className={styles.errorMessage}>{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Signup;
