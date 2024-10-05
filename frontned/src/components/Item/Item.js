import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Item.css'
const Item = (props) => {
  return (

    <div className='item'> 
   <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src = {props.image[0]} alt = ""  className='image'/>  </Link> 
    <p>{props.name}</p>
    <div className='item-price'>
        <div className='item-price-new'>
            Rs.{props.new_price}
        </div>
    </div>
    <div>
        <p>{props.description}</p>
    </div>
        
    </div>
 )
}

export default Item