import React, {  useState } from 'react';
import "./App.css";
import Typography from './components/Typography';
import Sizing from './components/Sizing';
import HoverFocus from './components/HoverFocus';
import Responsive from './components/Responsive';
import Navbar from './components/Navbar';

function App() {

 const [darkMode,setDarkMode]=useState(false)

  return (
    <div>
      <Typography/>
      <Sizing/>
      <HoverFocus/>
      <Responsive/> 
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}  />
    </div>
  );
}

export default App;
