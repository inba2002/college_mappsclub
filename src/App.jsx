import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import About from './Components/About';
import Activities from './Components/Activities';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Works from './Components/Works';
import Foter from './Components/Foter';

function App() {
  return (
    <div className='App'> 
      <Navbar/>
      <Home/>
      <About/>
      <Works/>
      <Activities/>
      <Contact/>
      <Foter/>
    </div>
  );
}

export default App;
