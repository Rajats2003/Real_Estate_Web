import React from 'react'
import { Link } from 'react-router-dom';
function AgentBoxsir(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}></img>
        </div>
        <div className='a-b-text'>
            <h3>
                {props.name}

            </h3>
            <Link to="/about" className='agent-btn'>Learn More</Link>


        </div>
      
    </div>
  )
}

export default AgentBoxsir;
