import { useEffect, useState, useContext } from "react";
import ArticleItem from "./ArticleItem";
import { AuthContext } from "./AuthContext";
import Header from "./Header";
import { ArticleContext } from "./ArticleContext";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const { user } = useContext(AuthContext);
    const { newArticle } = useContext(ArticleContext);

    useEffect(() => {
        fetch('http://localhost:8888/articles')
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (newArticle) {
                    setArticles([newArticle, ...data]);
                } else {
                    setArticles(data);
                }
                //navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }, [newArticle]);


    return (
        <div>
            <Header />
            {/* <h2 className="welcomeMessage">Welcome {user.username}</h2> */}
            <ul>
                {articles.map((article) => {
                    return (
                        <ArticleItem
                            key={article.id}
                            props={article}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default ArticleList;