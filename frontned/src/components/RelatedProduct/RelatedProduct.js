import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import './RelatedProduct.css'
const RelatedProduct = () => {
  return (
    <div className='RelatedProduct'>
        <h2>Related Product</h2>
        <hr />
        <div className='product-item'>
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  />
            
        })}
        </div> 
    </div>
  )
}

export default RelatedProduct