import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Article from "../pages/Article";
import ArticleList from "../pages/ArticleList";
import NotFound from "../pages/NotFound";

type Props = {};

function AppRoutes({}: Props) {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/article/:name" element={<Article />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
