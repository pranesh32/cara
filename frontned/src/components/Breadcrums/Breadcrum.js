import React from 'react';
import './Breadcrum.css';
import { ChevronRight } from 'lucide-react'; // Assuming you have installed and imported lucide-react correctly
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className='breadcrum'>
            <Link to="/" >Home</Link>
            <ChevronRight />
            Shop
            <ChevronRight />
            <Link to="" ></Link>
            {product.category}
            <ChevronRight />
            {product.name}
        </div>
    );
};

export default Breadcrum;
