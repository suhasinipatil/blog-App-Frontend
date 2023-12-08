import { useEffect, useState, useContext } from "react";
import ArticleItem from "./ArticleItem";
import { AuthContext } from "./AuthContext";
import Header from "./Header";
import { ArticleContext } from "./ArticleContext";
import { useNavigate } from "react-router-dom";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const { user } = useContext(AuthContext);
    const { newArticle } = useContext(ArticleContext);
    const navigate = useNavigate();
    console.log(newArticle);

    useEffect(() => {
        fetch('http://localhost:8888/articles')
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (newArticle) {
                    setArticles([newArticle,...data]);
                } else {
                    setArticles(data);
                }
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }, [newArticle]);

    return (
        <div>
            <Header/>
            <h2 className="welcomeMessage">Welcome {user.username}</h2>
            <ul>
                {articles.map((article) => (
                    <ArticleItem 
                        key={article.id} 
                        props={article} 
                        comments={article.commentEntities} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default ArticleList;