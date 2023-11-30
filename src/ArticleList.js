import { useEffect, useState, useContext } from "react";
import ArticleItem from "./ArticleItem";
import { AuthContext } from "./AuthContext";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const { token, loggedIn, username } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:8888/articles')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setArticles(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <div className="titleAuthor">
                <h1 className="articleTitle">Blog App</h1>
                <button className="articleAuthor">
                    <a href="/login">Login</a>
                </button>
            </div>
            <h2 className="articleAuthor">Welcome {username}</h2>
            <ul>
                {articles.map((article) => (
                    <ArticleItem key={article.id} props={article} comments={article.commentEntities} />
                ))}
            </ul>
        </div>
    );
}
export default ArticleList;