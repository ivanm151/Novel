import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import Articles from "./components/Articles";
import ArticleView from "./components/ArticleView";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:story/:slug" element={<ArticleView />} />
            </Routes>
        </Router>
    );
}
