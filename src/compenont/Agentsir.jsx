import React from 'react'

import AgentBoxsir from './AgentBoxsir';

import agentimage1 from '../images/s1.png';
import agentimage2 from '../images/s2.png';

import agentimage3 from '../images/s3.png';


function Agentsir() {
  return (
    <div className='agent'>
        <div className='a-heading'>
            <h1>Agents</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui nostrum, corporis animi ipsa tenetur itaque repellat ipsam quas quasi!</p>
        </div>
        <div className='b-container'>
            <AgentBoxsir image={agentimage1} name="Rajkumar"/>
            <AgentBoxsir image={agentimage2} name="Mahesh"/>
            <AgentBoxsir image={agentimage3} name="Dish"/>
        </div>

      
    </div>
  )
}

export default Agentsir;
