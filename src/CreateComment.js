import React, { useState, useContext } from "react";
import styles from "./styles/CreateComment.module.css";
import { AuthContext } from "./AuthContext";

const CreateComment = ({ postId, addComment }) => {
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);

  const Submit = (e) => {
    e.preventDefault();

    if(comment.trim() === "") {
        alert("Comment cannot be empty");
        return;
    }
    
    const commentData = {
        body: comment,
    };
    console.log({postId});
    fetch(`http://localhost:8888/articles/${postId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
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
        <div className={styles.divStyle}>
            <textarea
                type="text"
                placeholder="Comment"
                value={comment}
                className={styles.commentBody}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button className={`${styles.buttonStyle} ${user.loggedIn ? '' : styles.disabled}`} disabled={!user.loggedIn} onClick={Submit}>Add Comment</button>
        </div>
  );
};

export default CreateComment;