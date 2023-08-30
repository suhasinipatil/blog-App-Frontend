const ArticleItem = ({props}) => {

    return (
        <div className="articleItem">
            <div className="titleAuthor">
                <h2 className="articleTitle">{props.title}</h2>
                <h5 className="articleAuthor">{props.author}</h5>
            </div>
            <h3>{props.subtitle}</h3>
            <p className="articleBody">{props.content}</p>
            <h4 style={{ textAlign: 'left', marginLeft: '30px' }}>Comments:</h4>
            <div>
                <ul>
                    {props.comments.map((comment, index) => (
                        <li key={index} className="commentBody">
                            {comment}
                        </li>
                    ))}
                </ul>
            </div> 
            
        </div>
    );
}
export default ArticleItem;