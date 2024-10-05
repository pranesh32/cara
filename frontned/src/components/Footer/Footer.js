import React from 'react'
import './Footer.css'
import { InstagramIcon,TwitchIcon,TwitterIcon } from 'lucide-react'
const Footer = () => {
  return (
    <div className='footer'>
      <hr></hr>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='icons'>
            <InstagramIcon/>
            <TwitchIcon/>
        </div>
        <div className='copy'>
   
          
            <p>Copyright @ 2024 - ALL Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer