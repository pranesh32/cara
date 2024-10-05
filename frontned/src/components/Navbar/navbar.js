import './navbar.css';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { ShoppingCart } from 'lucide-react';
import logo from '../Assets/logo.png'


const Navbar = () => {

  return (
    <Router>
      <div className='nav'>

      <div className="left">
          <img src ={logo} />
        </div>
        <div className='right'>
          <ul>

       <li>  <Link to="/" className='item'>Home</Link></li> 
       <li> <Link to="/mens" className='item'>MEN</Link></li> 
       <li><Link to="/womens" className='item'>WOMEN</Link></li> 
       <li>
        <Link to="/kids" className='item'>KIDS</Link></li> 
       <li>  <Link to="/login" className='item'>LOGIN</Link></li> 
       <li>  <Link to="/cart" className='item'><ShoppingCart/></Link></li> 
      
          </ul>
        </div>
    
      </div>
    </Router>
  );
};

export default Navbar;
