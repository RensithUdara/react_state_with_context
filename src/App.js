import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className='app'>
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
