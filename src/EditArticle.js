import { useState, useContext, useEffect } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import styles from "./styles/CreateArticle.module.css";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const EditArticle = () => {
    const location = useLocation();
    const [title, setTitle] = useState(location.state.title);
    const [body, setBody] = useState(location.state.body);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const article = {
            title: title,
            body: body,
            subtitle: '',
            slug: ''
        };

        fetch(`http://localhost:8888/articles/${location.state.id}`, {
            method: 'PATCH',
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
                <button className={`${styles.postButton} ${user.loggedIn ? '' : styles.disabled}`} disabled={!user.loggedIn}>Update</button>
            </form>
            
        </div>
    );
};

export default EditArticle;