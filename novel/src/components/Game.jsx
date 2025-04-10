import React from "react";
import { Link } from "react-router-dom";

export default function Articles() {
    return (
        <div>
            <h2>Статьи</h2>
            <p>Здесь будут размещены статьи с гиперссылками.</p>
            <Link to="/">← Назад на главную</Link>
        </div>
    );
}
