// Desc: This file contains the ArticleItem component which is used to display the article title, author, subtitle, body, and comments.

import CreateComment from "./CreateComment";
import { useState } from "react";

const ArticleItem = ({props, comments}) => {
    const [articleComments, setArticleComments] = useState(comments); 

    const addComment = (newComment) => {
        // Add the new comment to the beginning of the comments list
        setArticleComments([newComment, ...comments]);
      };
    
    return (
        <div className="articleItem">
            <div className="titleAuthor">
                <h2 className="articleTitle">{props.title}</h2>
                <h5 className="articleAuthor">{props.author}</h5>
            </div>
            <h3>{props.subtitle}</h3>
            <p className="articleBody">{props.body}</p>
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