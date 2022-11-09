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

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <PyProject slides={SlideDataPy} />
      <JsProject slides={SlideDataJs} />
      <PoolBuddies slides={SlideDataPB} />
    </div>
    </>
  );
}

export default App;
