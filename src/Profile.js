import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import Header from './Header';
import styles from './styles/Profile.module.css';
import { Link } from 'react-router-dom';
import logo from './Images/smallerblozy.PNG';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [selectedTab, setSelectedTab] = useState('about');
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        console.log(selectedTab);
    }, [selectedTab]);

    useEffect(() => {
        fetch(`http://localhost:8888/articles?authorName=${user.username}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                //console.log(data);
                setBlogs(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <Header />
            <div className={styles.profileContainer}>
                <img src={logo} alt="Image" className={styles.userImage} />
                <h2 className={styles.welcomeMessage}>{user.username}</h2>
                <button className={styles.editProfileButton}>Edit Profile</button>
            </div>
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
        </div>
    );
}

export default Profile;
