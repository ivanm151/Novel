import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ArticleView() {
    const { story, slug } = useParams();
    const [content, setContent] = useState("");
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const path = `/articles/${story}/${slug}.html`;
        fetch(path)
            .then((res) => res.text())
            .then((html) => setContent(html))
            .catch(() =>
                setContent("<p>Статья не найдена. Проверьте название папки и файла.</p>")
            );
    }, [story, slug]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleClick = (e) => {
            const anchor = e.target.closest("a");
            if (anchor && anchor.getAttribute("href")?.startsWith("/articles/")) {
                e.preventDefault();
                const href = anchor.getAttribute("href");
                const parts = href.split("/");
                const nextStory = parts[2];
                const nextSlug = parts[3].replace(".html", "");
                navigate(`/articles/${nextStory}/${nextSlug}`);
            }
        };

        container.addEventListener("click", handleClick);
        return () => container.removeEventListener("click", handleClick);
    }, [navigate]);

    return (
        <div ref={containerRef}>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <hr />
            <Link to="/articles">← К списку историй</Link>
        </div>
    );
}

