import React, { useContext } from 'react';
import './ProductDisplay.css';
import { Star } from 'lucide-react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='ProductDisplay'>
            <div className='productdisplay-left'>
                <div className='img-list'>
                    {product.image.map((img, index) => (
                        <img key={index} className='prop' src={img} alt="" />
                    ))}
                </div>
                <div className='display-img'>
                    <img className='main' src={product.image[0]} alt="" />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='star'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <div className='price'>
                    <p>MRP inclusive of all taxes</p>
                    <div className='item-price-new'>Rs.{product.new_price}</div>
                </div>
                <div className='sizes'>
                    <h1>Select Size</h1>
                    <button className='s-button'>S</button>
                    <button className='s-button'>M</button>
                    <button className='s-button'>L</button>
                    <button className='s-button'>XL</button>
                </div>
                <div className='cart-button'>
                    <button className='c-button' onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                </div>
                <div>
                    <hr />
                    <p>100% Original Products</p>
                    <p>Pay on delivery might be available</p>
                    <p>Easy 14 days returns and exchanges</p>
                    <p></p>
                </div>
                <div className='product-description'>
                    <hr />
                    <h4>PRODUCT DETAILS</h4>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
