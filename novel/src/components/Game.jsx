import React from "react";
import { Link } from "react-router-dom";

export default function Game() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Визуальная новелла</h2>
            <iframe
                src="/renjs/index.html"
                title="RenJS Game"
                width="100%"
                height="600px"
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)"
                }}
            />
            <div style={{ marginTop: "20px" }}>
                <Link to="/">← Назад на главную</Link>
            </div>
        </div>
    );
}
