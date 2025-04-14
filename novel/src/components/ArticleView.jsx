import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ArticleView() {
    const { story, slug } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        const path = `/articles/${story}/${slug}.html`;
        fetch(path)
            .then((res) => res.text())
            .then((html) => setContent(html))
            .catch(() =>
                setContent("<p>Статья не найдена. Проверьте название папки и файла.</p>")
            );
    }, [story, slug]);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <hr />
            <Link to="/articles">← К списку историй</Link>
        </div>
    );
}
