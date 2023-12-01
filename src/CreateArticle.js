import { useState, useContext } from 'react';
import styles from './styles/CreateArticle.module.css';
import { AuthContext } from './AuthContext';

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setsubTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const { token , loggedIn, username } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const article = { 
            title: title,
            subtitle: subtitle,
            slug: slug,
            body: content
        };

        fetch('http://localhost:8888/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(article),
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
        });
    };
    
    return (
        <div className={styles.articleNew}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    value={title}
                    className={styles.inputheading}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="SubTitle"
                    value={subtitle}
                    className={styles.inputsubTitleheading}
                    onChange={(e) => setsubTitle(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Slug"
                    value={slug}
                    className={styles.inputsubheading}
                    onChange={(e) => setSlug(e.target.value)}
                />
                <input 
                    type="rich text"
                    placeholder="Content"
                    value={content}
                    className={styles.paragraph}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button className={`${styles.postButton} ${loggedIn ? '' : styles.disabled}`} disabled={!loggedIn}>POST</button>
            </form>
        </div>
    );
}

export default CreateArticle;