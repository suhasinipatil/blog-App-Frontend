import ArticleList from "./ArticleList";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import EditArticle from "./EditArticle";

const BlogApp = () => {
    return(
        <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/edit/:id" element={<EditArticle />} />
        </Routes>
    );
};

export default BlogApp;