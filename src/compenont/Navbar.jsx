import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" className='logo'>
        {/* Your logo */}
      </Link>

      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>

      <ul className='menu'>
        <li><Link to="/">Home</Link></li>
        {/* Add target="_blank" to open in a new tab */}
        <li><a href="eduction/src/compenont/About.jsx" target="_blank">About</a></li>
        <li><Link to="/agentsir">Agent</Link></li>
        <li><Link to="/properties">Property</Link></li>
        <li><Link to="/rcontact">Contact</Link></li>
      </ul>
      
      <Link to="/properties" className='property'>Properties</Link>
    </nav>
  );
}

export default Navbar;
