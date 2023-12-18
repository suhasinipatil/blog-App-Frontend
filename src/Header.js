import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/Header.module.css';
import logo from './Images/smallerblozy.PNG';
import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const Header = () => {
    const { user } = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(user.loggedIn);

    return (
        <header className={styles.headerDiv}>
            <h1 className={styles.title}>
                <a href="/" className={styles.titleRef}>
                    <img src={logo} alt="Blog App" />
                </a>
            </h1>
            <div className={styles.buttonContainer}>
                <button className={styles.about}>
                    <a href="/about" className={styles.writeRef}>About</a>
                </button>
                <button className={styles.write}>
                    <a href="/write" className={styles.writeRef}>
                        <FontAwesomeIcon icon={faPenToSquare} className={styles.writeIcon} />
                        Write
                    </a>
                </button>
                {isLoggedIn ? (
                    <>
                        <button className={styles.login}>
                            <a href="/profile" className={styles.writeRef}>Profile</a>
                        </button>
                        <button className={styles.login} onClick={() => setIsLoggedIn(false)}>
                            Logout
                        </button>
                    </>
                ) : (
                    <button className={styles.login}>
                        <a href="/login" className={styles.writeRef} onClick={() => setIsLoggedIn(true)}>Login</a>
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;