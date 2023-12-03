// Desc: This file contains the ArticleItem component which is used to display the article title, author, subtitle, body, and comments.

import CreateComment from "./CreateComment";

const ArticleItem = ({props, comments}) => {
  
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
                <CreateComment postId={props.id} />
                <ul>
                    {comments && comments.map((comment, index) => (
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