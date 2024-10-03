import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import HomePage from './HomePage';
import Programs from './ProgramsPage';
import About from './AboutPage';
import TimedPopup from './popup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path= "/About" element = {<About/>} />
        </Routes>
        <TimedPopup/>
      </div>
    </Router>
  );
}

export default App;
