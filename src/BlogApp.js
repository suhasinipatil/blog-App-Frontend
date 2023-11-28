import ArticleList from "./ArticleList";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";

const BlogApp = () => {
    return(
        <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default BlogApp;