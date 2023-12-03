import React, { useState, useContext } from "react";
import styles from "./styles/CreateComment.module.css";
import { AuthContext } from "./AuthContext";

const CreateComment = ({ postId, addComment }) => {
  const [comment, setComment] = useState("");
  const { token , loggedIn } = useContext(AuthContext);

  const Submit = (e) => {
    e.preventDefault();
    const commentData = {
        title: "",
        body: comment,
    };
    console.log({postId});
    fetch(`http://localhost:8888/articles/${postId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(commentData),
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setComment('');
            addComment(data);
        })
        .catch(error => {
            console.log(error);
    });
    };

    return (
        <div>
        <input
            type="text"
            placeholder="Comment"
            value={comment}
            className={styles.commentBody}
            onChange={(e) => setComment(e.target.value)}
            />
            <button className={`${styles.buttonStyle} ${loggedIn ? '' : styles.disabled}`} disabled={!loggedIn} onClick={Submit}>Add Comment</button>
        </div>
  );
};

export default CreateComment;