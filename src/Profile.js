import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import Header from './Header';
import styles from './styles/Profile.module.css';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [selectedTab, setSelectedTab] = useState('about');

    const blogs = [
        {
            title: 'My First Blog',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
        },
        {
            title: 'My Second Blog',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
        },
        {
            title: 'My Third Blog',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
        },
        {
            title: 'My Fourth Blog',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
        },
        {
            title: 'My Fifth Blog',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
        },
    ];

    return (
        <div>
            <Header />
            <div className={styles.profileContainer}>
                <img src={user.image} alt="User" className={styles.userImage} />
                <h2 className={styles.welcomeMessage}>{user.username}</h2>
                <button className={styles.editProfileButton}>Edit Profile</button>
            </div>
            <div className={styles.tabs}>
                <button onClick={() => setSelectedTab('about')} className={styles.aboutButton}>About</button>
                <button onClick={() => setSelectedTab('blogs')} className={styles.blogsButton}>Blogs</button>
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
                            <p className={styles.blogContent}>{blog.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Profile;
