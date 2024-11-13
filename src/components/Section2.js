import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Section2() {
    const theme = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "white",
            color: theme === "dark" ? "white" : "#1e293b"
        }}>
            <h2>Section 2</h2>
        </div>
    );
}

export default Section2;
