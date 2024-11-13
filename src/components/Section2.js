import { useContext } from "react";
import { ThemeContext, useTheme } from "../ThemeContext";

function Section2({ onClick }) {
    const {theme , toggleTheme} = useTheme();

    return (
        <div style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "white",
            color: theme === "dark" ? "white" : "#1e293b"
        }}>
            <h2>Section 2</h2>
            <button onClick={onClick}>Toggle Mode</button>
        </div>
    );
}

export default Section2;
