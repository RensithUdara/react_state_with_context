import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState("dark");

    const handleClick = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: handleClick }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;


export function useTheme () {
    return useContext (ThemeContext);
}