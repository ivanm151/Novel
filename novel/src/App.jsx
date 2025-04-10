import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import Articles from "./components/Articles";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/articles" element={<Articles />} />
            </Routes>
        </Router>
    );
}
