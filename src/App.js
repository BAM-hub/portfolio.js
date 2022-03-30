import { useState } from 'react';
import './App.css';
import About from "./components/About";
import NavBar from './components/NavBar';


const App = () => {
  const [color, setColor] = useState('#55EFC4');

  return (
    <div>
      <NavBar 
        color={color}
      />
      <About 
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
