import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import CreateComment from "./CreateComment";
import { AuthContext } from "./AuthContext";

const ReadArticle = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [articleComments, setArticleComments] = useState(null);
    const [isAuthor, setIsAuthor] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        console.log(id+ " delete");
    };

    const handleEdit = (id, title, body) => {
        console.log(id+ " edit");
        navigate(`/edit/${id}`, { state: { id: id, title: title, body: body } });
    };

    const addComment = (newComment) => {
        // Add the new comment to the beginning of the comments list
        setArticleComments([newComment, ...article.commentEntities]);
    };

    useEffect(() => {
        fetch(`http://localhost:8888/articles/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setArticle(data);
                setArticleComments(data.commentEntities);
                if (user && data) {
                    setIsAuthor(user.loggedIn && user.id === data.authorId);
                }
            })
            .catch(err => {
                console.log(err);
            })
    });

    return (
        <div>
            <h1 className="title">{article?.title}</h1>
            <p className="body">{article?.body}</p>
            <div className="actions">
                <button 
                    className={`editIcon ${isAuthor ? '' : 'editIconDisabled'}`}
                    onClick={() => handleEdit(id, article.title, article.body)}
                    disabled={!isAuthor}
                 >Edit
                 </button>
                <button 
                    className={`deleteIcon ${isAuthor ? '' : 'deleteDisabled'}`}  
                    onClick={() => handleDelete(id)} 
                    disabled={isAuthor}
                 >Delete
                 </button>
            </div>
            <h4 className="commentsLabel">Comments:</h4>
            <div>
                <CreateComment postId={id} addComment={addComment}/>
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
};

export default ReadArticle;