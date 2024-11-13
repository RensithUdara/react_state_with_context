import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import ThemeContextProvider from './ThemeContext';

function App() {
  return (
    <div className='app'>
      <ThemeContextProvider>
        <Section1 />
        <Section2 />
      </ThemeContextProvider>
    </div>
  );
}

export default App;


