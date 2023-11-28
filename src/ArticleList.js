import { useEffect, useState } from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

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
            <h3 className="articleAuthor">Login</h3>
            </div>
            <ul>
                {articles.map((article) => (
                    <ArticleItem key={article.id} props={article} comments={article.commentEntities} />
                ))}
            </ul>
        </div>
    );
}
export default ArticleList;