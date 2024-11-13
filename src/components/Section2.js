import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Section2({ onClick }) {
    const {theme} = useContext(ThemeContext);

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
