// Desc: This file contains the ArticleItem component which is used to display the article title, author, subtitle, body, and comments.

import CreateComment from "./CreateComment";
import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const ArticleItem = ({props, comment}) => {
    const [articleComments, setArticleComments] = useState(comment); 
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const addComment = (newComment) => {
        // Add the new comment to the beginning of the comments list
        setArticleComments([newComment, ...comment]);
    };
    
    const handleDelete = (id) => {
        console.log(id+ " delete");
    };

    const handleEdit = (id, title, body) => {
        navigate(`/edit/${id}`, { state: { id: id, title: title, body: body } });
    };

    const isAuthor = user.loggedIn && user.id == props.authorId;
   
    return (
        <div className="articleItem">
            <div className="titleAuthor">
                <h2 className="articleTitle">{props.title}</h2>
                <h5 className="articleAuthor">{props.author}</h5>
            </div>
            <h3>{props.subtitle}</h3>
            <p className="articleBody">{props.body}</p>
            <div className="actions">
                <button 
                    className={`editIcon ${isAuthor ? '' : 'editIconDisabled'}`}
                    onClick={() => handleEdit(props.id, props.title, props.body)}
                    disabled={!isAuthor}
                 >Edit
                 </button>
                <button 
                    className={`deleteIcon ${isAuthor ? '' : 'deleteDisabled'}`}  
                    onClick={() => handleDelete(props.id)} 
                    disabled={!isAuthor}
                 >Delete
                 </button>
            </div>
            <h4 style={{ textAlign: 'left', marginLeft: '30px' }}>Comments:</h4>
            <div>
                <CreateComment postId={props.id} addComment={addComment}/>
                <ul>
                    {articleComments && articleComments.map((comment, index) => (
                        <li key={index} className="commentBody">
                            {comment.body}
                        </li>
                    ))}
                </ul>
            </div> 
        </div>
    );
}
export default ArticleItem;