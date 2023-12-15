import React from 'react';
import styles from './styles/AboutMe.module.css';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className={styles.about}>
            <h1>About Me</h1>
            <p>
                Hello fellow coders! I'm Suhasini, a software developer with a solid foundation in C#, now on a journey to explore the vast landscapes of Java and React. By day, I'm immersed in the world of coding, crafting solutions and embracing the evolving tech scene.
            </p>

            <h2>Who Am I?</h2>
            <p>
                I've navigated through the complexities of software development, with a keen eye for detail and a passion for turning ideas into digital realities. Now, I'm directing my skills towards Java and React, excited about the endless possibilities these technologies offer.
            </p>

            <h2>The Exploration</h2>
            <p>
                Why the switch, you might wonder? Simply put, I thrive on challenges and learning new things. Transitioning to Java and React is my way of staying on the cutting edge and expanding my toolkit as a developer.
            </p>

            <h2>What You'll Find Here</h2>
            <p>
                Welcome to my virtual coding playground! On this website, I'll be documenting my adventures, sharing insights, and maybe a few pitfalls, as I delve into Java and React. Expect a mix of tutorials, snippets, and the occasional tech musings.
            </p>

            <h2>Connect with Me</h2>
            <p>
                Whether you're a seasoned developer, a fellow learner, or just someone curious about tech, I'd love to connect. Shoot me an email at <a href="mailto:suhasinibpatil09@gmail.com">suhasinibpatil09@gmail.com</a>, or find me on LinkedIn <a href="https://www.linkedin.com/in/suhasinibpatil09/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/suhasinibpatil09/</a>. Let's geek out together!
            </p>

            <p>
                Thanks for stopping by, and here's to the exciting journey ahead!
            </p>

            <p>
                Happy coding,
                <br />
                Suhasini
            </p>
        </div>
    );
};

export default AboutMe;