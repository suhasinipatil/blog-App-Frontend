import React, { useState } from 'react';
import styles from './styles/Signup.module.css';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const [username, setUsername] = useState("");

    const handleSignup = () => {
       
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
            </div>
        </div>
    );
};

export default Signup;
