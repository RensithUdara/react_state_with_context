import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("dark");

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className='app'>
      <button onClick={handleClick}>Toogle Mode</button>

      {/* <Section1 theme={theme}/>
      <Section2 theme={theme}/> */}

      <Section1 />
      <Section2 />
      
    </div>
  );
}

export default App;
