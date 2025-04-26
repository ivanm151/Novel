import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Game() {
    const [selectedChapter, setSelectedChapter] = useState("renjs");
    const [comingSoon, setComingSoon] = useState(false);

    const chapters = [
        { id: "renjs", title: "Глава 1", articleLink: "/articles/story1/art1" },
        { id: "renjs1", title: "Глава 2", articleLink: "/articles/story2/art1" },
        { id: "renjs2", title: "Глава 3", articleLink: "/articles/story3/art1" }
    ];

    const handleSelectChapter = (chapterId) => {
        if (chapterId === "renjs") {
            setSelectedChapter(chapterId);
            setComingSoon(false);
        } else {
            setComingSoon(true);
            setSelectedChapter(chapterId); // чтобы подсвечивать выбранную кнопку
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Визуальная новелла</h2>

            <div style={styles.chapterList}>
                {chapters.map((chapter) => (
                    <div key={chapter.id} style={styles.chapterItem}>
                        <button
                            onClick={() => handleSelectChapter(chapter.id)}
                            style={{
                                ...styles.button,
                                ...(selectedChapter === chapter.id ? styles.activeButton : {})
                            }}
                        >
                            {chapter.title}
                        </button>
                        <Link to={chapter.articleLink} style={styles.articleLink}>
                            Читать статью
                        </Link>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {comingSoon ? (
                    <motion.div
                        key="coming-soon"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        style={styles.comingSoonBox}
                    >
                        Coming soon...
                    </motion.div>
                ) : (
                    <motion.div
                        key="iframe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ width: "100%" }}
                    >
                        <iframe
                            src={`/${selectedChapter}/index.html`}
                            title="RenJS Game"
                            width="100%"
                            height="600px"
                            style={styles.iframe}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div style={{ marginTop: "30px", textAlign: "center" }}>
                <Link to="/" style={styles.backLink}>← Назад на главную</Link>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "40px 20px",
        fontFamily: "'Georgia', serif",
        background: "linear-gradient(to right top, #3b1f47, #5a3b7d, #8673b0)",
        minHeight: "100vh",
        color: "#f3e9ff",
        textAlign: "center"
    },
    title: {
        fontSize: "36px",
        marginBottom: "30px",
        textShadow: "2px 2px 12px rgba(0, 0, 0, 0.3)"
    },
    chapterList: {
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        marginBottom: "40px"
    },
    chapterItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    button: {
        padding: "14px 28px",
        borderRadius: "12px",
        border: "2px solid #c4a4f4",
        backgroundColor: "#e9dcfa",
        color: "#3a1f4f",
        fontWeight: "bold",
        fontSize: "18px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.2)"
    },
    activeButton: {
        backgroundColor: "#7d5fcf",
        color: "#fff",
        transform: "scale(1.05)"
    },
    disabledButton: {
        opacity: 0.5,
        cursor: "not-allowed"
    },
    articleLink: {
        marginTop: "8px",
        fontSize: "14px",
        color: "#d8c1f4",
        textDecoration: "underline"
    },
    comingSoonBox: {
        marginTop: "40px",
        padding: "50px",
        border: "2px dashed #cbaef4",
        borderRadius: "12px",
        backgroundColor: "#5a3b7d22",
        color: "#f0e6ff",
        fontSize: "24px"
    },
    iframe: {
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)"
    },
    backLink: {
        fontSize: "18px",
        color: "#e1d4ff",
        textDecoration: "underline"
    }
};
