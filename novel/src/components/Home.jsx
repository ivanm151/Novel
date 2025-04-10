import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h2>Добро пожаловать!</h2>
            <p>Выберите, куда пойти:</p>
            <ul>
                <li><Link to="/game">Играть</Link></li>
                <li><Link to="/articles">Статьи</Link></li>
            </ul>
        </div>
    );
}
