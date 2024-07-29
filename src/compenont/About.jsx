import React from 'react'
import aboutimage from '../images/hero.png'


function About() {
  return (
    <div className='about'>
        <div className='about-model'>
          <img src={aboutimage}></img>
        </div>
        <div className='about-text'>
          <h2>We are the Best <br/> real Estate Company</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore perspiciatis optio rem at itaque necessitatibus nam totam earum libero illum minus velit asperiores error magnam, numquam aperiam ipsa ex facere?
          </p>
          <button>View More Detials</button>
        </div>
    </div>
  )
}

export default About;
