import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Projects/Project';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <About/>
      <Project/>
    </div>
    </>
  );
}

export default App;
