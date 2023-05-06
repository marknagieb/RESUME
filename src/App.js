import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router} from 'react-router-dom';
import Projects from './Components/pages/Projects';
import Experience from './Components/pages/Experience';
import Education from './Components/pages/Education';
import Skills from './Components/pages/Skills';
import Footer from './Components/Footer'
function App() {
  return (
    <>
    <div style={{background: '#161617'}}>
      <Router>
        <Navbar/>
        <Home/>
        <Skills/>
        <Education/>
        <Experience/>
        <Projects/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
      </Router>
      </div>
    </>
  );
}

export default App;
