import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Section4() {
    const {theme , toggleTheme} = useTheme();

    return (
        <div style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "grey",
            color: theme === "dark" ? "white" : "#1e293b"
        }}>
            <h2>Section 4</h2>
            <button onClick={() => {
                toggleTheme();
            }}>Section 4 Toggle Theme Button</button>
        </div>
    );
}

export default Section4;
