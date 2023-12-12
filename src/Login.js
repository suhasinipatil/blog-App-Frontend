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

    const handleSubmit = (e) => {
        e.preventDefault();

        if(usernameLoggedIn.trim() === "") {
            setUsernameError("Username cannot be empty");
            setUsernameLoggedIn("");
        } else {
            setUsernameError("");
        }

        if(password.trim() === "") {
            setPasswordError("Password cannot be empty");
            setPassword("");
        } else {
            setPasswordError("");
        }
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
                console.log(data);
                // Set the token in AuthContext
                const updatedUser = {
                    token: data.token,
                    loggedIn: true,
                    username: usernameLoggedIn,
                    id: data.id,
                  };
                handleSetUser(updatedUser);
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
                        required
                        value={usernameLoggedIn}
                        onChange={(e) => setUsernameLoggedIn(e.target.value)}
                    />
                    <div id="usernameError" class={styles.errorMessage}>{usernameError}</div>
                    <input 
                        type="text"
                        placeholder="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div id="passwordError" class={styles.errorMessage}>{passwordError}</div>
                    <button>Login</button>
                    <p className={styles.signupText}>Don't have an account? <a href="/signup">Sign up</a></p>
                </form>
            </div>
            {error && (
                    <div className={styles.errorContainer}>
                        <p className={styles.errorMessage}>{error}</p>
                    </div>
            )}
        </div>
    );
};

export default Login;