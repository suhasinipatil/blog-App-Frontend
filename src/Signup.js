import React, { useState } from 'react';
import styles from './styles/Signup.module.css';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleSignup = () => {
    // Create an object with the user's signup data
    const userData = {
        username: username,
        password: password,
        email: email,
        bio: bio,
    };
    console.log(JSON.stringify(userData));
    // Make the API request
    fetch('http://localhost:8888/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        })
        .then(response => {
            // if (!response.ok) {
            //     throw new Error(response.message);
            // }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
            if (error instanceof SyntaxError && error.message.includes("Unexpected token")) {
                setError("User already exists");
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
            <div className={styles.form}>
                <table>
                    <tr>
                        <td>
                            <h4 className={styles.labelStyle}>Username</h4>
                            <input 
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={styles.inputStyle}
                            />
                        </td>
                        <td>
                            <h4 className={styles.labelStyle}>Password</h4>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.inputStyle}
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
                                className={styles.inputStyle}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <h4 className={styles.labelStyle}>Bio</h4>
                            <input
                                type="rich text"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className={styles.bioInputStyle}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={handleSignup} className={styles.buttonStyle}>Create Account</button>
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
