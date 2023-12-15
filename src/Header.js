import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/Header.module.css';
import logo from './Images/blozy.ico';

const Header = () => {

    return (
        <header className={styles.headerDiv}>
            {/* <h1 className={styles.title}>
                <img src={logo} alt="Blog App" />
            </h1> */}
            <h1 className={styles.title}>Blog App</h1>
            <button className={styles.write}>
                <a href="/write" className={styles.writeRef}>
                    <FontAwesomeIcon icon={faPenToSquare} className={styles.writeIcon} />
                    Write
                </a>
            </button>
            <button className={styles.login}>
                <a href="/login" className={styles.writeRef}>Login</a>
            </button>
        </header>
    );
}

export default Header;