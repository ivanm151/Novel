import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
                <motion.h1
                    style={styles.title}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Таинственный Томск
                </motion.h1>

                <motion.p
                    style={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Команда "Сибирские сумерки"
                </motion.p>

                <div style={styles.buttonGroup}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/game" style={styles.button}>
                            Играть
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/articles" style={styles.button}>
                            Статьи
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    outerContainer: {
        minHeight: "100vh",
        backgroundColor: "#eee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Georgia', serif",
    },
    innerContainer: {
        width: "90%",
        maxWidth: "600px",
        background: "linear-gradient(to right top, #3b1f47, #5a3b7d, #8673b0)",
        borderRadius: "16px",
        padding: "40px 20px",
        textAlign: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
    title: {
        fontSize: "clamp(28px, 6vw, 48px)", // <-- Адаптивный шрифт!
        color: "#f3e9ff",
        marginBottom: "20px",
        textShadow: "2px 2px 12px rgba(0, 0, 0, 0.4)",
        wordBreak: "break-word", // чтобы если что переносилось
    },
    subtitle: {
        fontSize: "clamp(18px, 4vw, 24px)", // тоже адаптивный
        color: "#d4c0f1",
        marginBottom: "40px",
    },
    buttonGroup: {
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#7c5baa",
        color: "#fff",
        padding: "15px 30px",
        borderRadius: "12px",
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
        transition: "background 0.3s",
        border: "2px solid #4b2c61",
    },
};
