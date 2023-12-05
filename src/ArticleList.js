import { useEffect, useState, useContext } from "react";
import ArticleItem from "./ArticleItem";
import { AuthContext } from "./AuthContext";
import CreateArticle from "./CreateArticle";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const { user } = useContext(AuthContext);

    const addNewArticle = (newArticle) => {
        setArticles([newArticle, ...articles]);
    };

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
            <h2 className="welcomeMessage">Welcome {user.username}</h2>
            <CreateArticle addNewArticle={addNewArticle} />
            <ul>
                {articles.map((article) => (
                    <ArticleItem key={article.id} props={article} comments={article.commentEntities} />
                ))}
            </ul>
        </div>
    );
}

export default ArticleList;