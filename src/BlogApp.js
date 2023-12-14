import ArticleList from "./ArticleList";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import EditArticle from "./EditArticle";
import CreateArticle from "./CreateArticle";
import ReadArticle from "./ReadArticle";

const BlogApp = () => {
    return (
        <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/edit/:id" element={<EditArticle />} />
            <Route path="/write" element={<CreateArticle />} />
            <Route path="/articles/:id" element={<ReadArticle />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
};

export default BlogApp;