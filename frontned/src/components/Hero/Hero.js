import React from 'react'
import './Hero.css'

import   b4 from '../Assets/b4.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div className='text'>
            
                   <p >new</p> 
                
  
                <p>collections</p> 
                <p>for everyone</p>
              </div>
        
            <button className='button'>Latest collections</button>
        </div>
        <div className='hero-right'>
            <img src= {b4} className='a' />
        </div>
    </div>
  )
}

export default Hero