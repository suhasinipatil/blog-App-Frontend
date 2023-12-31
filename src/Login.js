import React, { useState, useContext } from 'react';
import styles from './styles/Login.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {
    const [usernameLoggedIn, setUsernameLoggedIn] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { handleSetUser } = useContext(AuthContext);
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleUsernameBlur = () => {
        setError("");
        if (usernameLoggedIn.trim() === '') {
            setUsernameError("Username cannot be empty");
            setUsernameLoggedIn("");
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

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log(usernameLoggedIn, password);

        const loginData = {
            username: usernameLoggedIn,
            password: password,
        };

        fetch('http://localhost:8888/users/login?token=token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data);
                // Set the token in AuthContext
                const updatedUser = {
                    token: data.token,
                    loggedIn: true,
                    username: usernameLoggedIn,
                    id: data.id,
                    bio: data.bio,
                    email: data.email,
                    image: data.image,
                };
                handleSetUser(updatedUser);
                //console.log(user);
                // Redirect to the home page
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                if (error instanceof SyntaxError && error.message.includes("Unexpected token")) {
                    setError("Username or password is incorrect");
                } else {
                    setError(error.message);
                }
                setUsernameLoggedIn("");
                setPassword("");
            });
    };

    return (
        <div>
            <h1 className="loginHeaderStyle">Login</h1>
            <div className={styles.formWrapper}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        className={usernameError ? styles.invalid : ''}
                        value={usernameLoggedIn}
                        onChange={(e) => setUsernameLoggedIn(e.target.value)}
                        onBlur={handleUsernameBlur}
                    />
                    <div
                        id="usernameError"
                        className={styles.errorMessage}
                    >
                        {usernameError}
                    </div>
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        className={passwordError ? styles.invalid : ''}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={handlePasswordBlur}
                    />
                    <div id="passwordError" className={styles.errorMessage}>{passwordError}</div>
                    <button
                        type="submit"
                        disabled={usernameError || passwordError}
                        className={usernameError || passwordError ? styles.buttonDisabled : styles.buttonEnabled}
                    >
                        Login
                    </button>
                    <p className={styles.signupText}>Don't have an account? <a href="/signup">Sign up</a></p>
                    {error && (
                        <div className={styles.errorContainer}>
                            <p className={styles.errorMessage}>{error}</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;