import { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

const Comment = ({ onDelete, comment, userId, authorId, articleId }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isLong, setIsLong] = useState(false);
    const { user } = useContext(AuthContext);
    const textRef = useRef();
    
    useEffect(() => {
        if (textRef.current.scrollHeight > textRef.current.clientHeight) {
            setIsLong(true);
        }
    }, [comment.body]);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleDelete = () => {
        //console.log("delete " , articleId, comment.Id);
        fetch(`http://localhost:8888/articles/${articleId}/comments/${comment.id}`, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            //console.log(data);
            onDelete(data.id);
        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div>
            <p ref={textRef} className={`commentBody ${isCollapsed ? "collapsed" : ""}`}>
                {comment.body}
            </p>
            {isLong && (isCollapsed ? (
                <button onClick={toggleCollapse} className="toggleButton">Read More</button>
            ) : (
                <button onClick={toggleCollapse} className="toggleButton">Show Less</button>
            ))}
            {userId === authorId && (
                <button onClick={handleDelete} className="deleteButton">Delete</button>
            )}
        </div>
    );
};

export default Comment;