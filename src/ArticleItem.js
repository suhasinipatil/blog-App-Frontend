// Desc: This file contains the ArticleItem component which is used to display the article title, author, subtitle, body, and comments.

import { Link } from "react-router-dom";

const ArticleItem = ({ props }) => {
    return (
        <div className="articleItem">
            <div className="titleAuthor">
                <h2 className="articleTitle">{props.title}</h2>
                <h5 className="articleAuthor">{props.author}</h5>
            </div>
            <p className="articleBody">
                <Link to={{
                    pathname: `/articles/${props.id}`
                }} className="link-text">
                    {props.body}
                </Link>
            </p>
        </div>
    );
}
export default ArticleItem;