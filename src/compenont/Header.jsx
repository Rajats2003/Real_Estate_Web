import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <div className='header'>
      <Navbar/>
      <div  className='intro'>
        <p>Looking for a property</p>
        <h1><span>Buy </span> and<span> Sell</span> Property</h1>
        <p className='detiles'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores id sequi eius expedita aliquam nemo. Soluta ad est aliquam?</p>
        <a href='#' className='header-btn'>Details</a>
      </div>
    </div>
  )
}

export default Header;
