import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import Header from './Header';
import styles from './styles/Profile.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [selectedTab, setSelectedTab] = useState('about');
    const [blogs, setBlogs] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        //console.log(user.username);
        fetch(`http://localhost:8888/articles/author?authorName=${user.username}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                //console.log(data);
                setBlogs(data);
            });
    }, [user, navigate]);

    return (
        <div>
            {!user.loggedIn ? (
                <Login />
            ) : (
                <>
                    <Header />
                    <div className={styles.tabs}>
                        <button
                            className={styles.aboutButton}
                            onClick={() => setSelectedTab('about')}
                        >
                            About
                        </button>
                        <button
                            className={styles.blogsButton}
                            onClick={() => setSelectedTab('blogs')}
                        >
                            Blogs
                        </button>
                    </div>
                    {selectedTab === 'about' ? (
                        <div>
                            <table className={styles.table}>
                                <tbody>
                                    <tr>
                                        <td className={styles.label}>Username</td>
                                        <td className={styles.labelContent}>{user.username}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.label}>Bio</td>
                                        <td className={styles.labelContent}>{user.bio}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.label}>Email</td>
                                        <td className={styles.labelContent}>{user.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className={styles.blogsContainer}>
                            {blogs.map((blog, index) => (
                                <div key={index} className={styles.blogPost}>
                                    <h3 className={styles.blogTitle}>{blog.title}</h3>
                                    <p className={styles.blogContent}>
                                        <Link to={{
                                            pathname: `/articles/${blog.id}`
                                        }} className={styles.linktext}>
                                            {blog.body}
                                        </Link>
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Profile;
