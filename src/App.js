import './App.css';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import PyProject from './Components/PythonProject/PyProject';
import PoolBuddies from './Components/PoolBuddies/PoolBuddies';
import JsProject from './Components/JsProject/JsProject';
import {  SlideDataPy } from './Components/PythonProject/SlideDataPy';
import {  SlideDataJs } from './Components/JsProject/SlideDataJs';
import {  SlideDataPB } from './Components/PoolBuddies/SlideDataPB';
import Contact from './Components/Contact/Contact';
import { React, useContext } from 'react'
import { ThemeContext } from './Context'


function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  return (
    <>
    <div className="App"
    style={{
      background : darkMode? 'black': ' ',
      color : darkMode? 'white': ' ',
    }}

    >
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <PoolBuddies slides={SlideDataPB} />
      <JsProject slides={SlideDataJs} />
      <PyProject slides={SlideDataPy} />
      <Contact/>
    </div>
    </>
  );
}

export default App;
