import React from 'react'
import Proportiesbox from './Proportiesbox';
import propimage1 from '../images/p1.png';
import propimage2 from '../images/p2.png';

import propimage3 from '../images/p3.png';

function Properties() {
  return (
    <div className='product'>
        <div className='p-heading'>
            <h3>Properties</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, perspiciatis labore excepturi omnis quidem nemo numquam? Sint recusandae magnam voluptate?</p>
        </div>
        <div className='product-container'>
    <Proportiesbox image={propimage1} name="Rajkumar" price="23,333"/>
    <Proportiesbox image={propimage2} name="Mahesh" price="23,333"/>
    <Proportiesbox image={propimage3} name="Dish" price="23,333"/>
    </div>
      
    </div>
    


  )
}

export default Properties;
