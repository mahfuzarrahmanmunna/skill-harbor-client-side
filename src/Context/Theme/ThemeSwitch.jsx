import React, { useState, useEffect } from "react";

const ThemeSwitch = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button onClick={toggleTheme} style={{
            padding: "0.5rem 1rem",
            borderRadius: "1rem",
            border: "none",
            cursor: "pointer",
            background: theme === "light" ? "#222" : "#fff",
            color: theme === "light" ? "#fff" : "#222"
        }}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};

export default ThemeSwitch;