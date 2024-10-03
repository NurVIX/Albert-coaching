import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './style.css';

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="Navlinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/about">About</Link></li>
      </div>
      <div className="socialNav">
        <a href="https://www.instagram.com/albertkiko/?hl=en" className='socialIcon'>
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.youtube.com/playlist?list=PLqsV2uGHqGCAlZ0oud0WWkcp8Fds0-X_n" className='socialIcon'>
          <i className="bi bi-youtube"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
