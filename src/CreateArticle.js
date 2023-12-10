import { useState, useContext } from 'react';
import styles from './styles/CreateArticle.module.css';
import { AuthContext } from './AuthContext';
import Header from './Header';
import { ArticleContext } from './ArticleContext';
import { useNavigate } from 'react-router-dom';

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { user } = useContext(AuthContext);
    const { addNewArticle } = useContext(ArticleContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const article = { 
            title: title,
            body: body,
        };

        fetch('http://localhost:8888/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify(article),
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                addNewArticle(data);
                setTitle('');
                setBody('');
                navigate('/');
            })
            .catch(error => {
                console.log(error);
        });
    };
    
    return (
        <div>
            <Header />
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                        type="text"
                        placeholder="Title"
                        value={title}
                        className={styles.inputheading}
                        onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={body}
                    className={`${styles.paragraph} ${styles.largeInput}`}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button className={`${styles.postButton} ${user.loggedIn ? '' : styles.disabled}`} disabled={!user.loggedIn}>POST</button>
            </form>
            
        </div>
    );
}

export default CreateArticle;