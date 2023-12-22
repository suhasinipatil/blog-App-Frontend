import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/Header.module.css';
import logo from './Images/smallerblozy.PNG';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

const Header = () => {
    const { user, handleUnsetUser } = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(user ? user.loggedIn : false);

    useEffect(() => {
        setIsLoggedIn(user ? user.loggedIn : false);
    }, [user]);

    const logout = () => {
        //console.log('logout');
        fetch('http://localhost:8888/users/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${user.token}`,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // use text() instead of json() because the response is a string
            })
            .then(data => {
                //console.log(data);
                setIsLoggedIn(false);
                handleUnsetUser();
                //navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

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
                        <button className={styles.login} onClick={logout}>
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