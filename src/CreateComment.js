import React, { useState } from "react";
import styles from "./styles/CreateComment.module.css";

const CreateComment = ({ postId }) => {
  const [comment, setComment] = useState("");
 
  const Submit = (e) => {
    e.preventDefault();
    const commentData = {
        title: "",
        body: comment,
    };

    fetch(`http://localhost:8888/articles/${postId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setComment('');
        })
        .catch(error => {
            console.log(error);
    });
    };

    return (
    <>
      <input
        type="text"
        placeholder="Comment"
        value={comment}
        className={styles.commentBody}
        onChange={(e) => setComment(e.target.value)}
        />
        <button className={styles.buttonStyle} onSubmit={Submit}>Add Comment</button>
    </>
  );
};

export default CreateComment;