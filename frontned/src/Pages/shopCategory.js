import React, { useContext, useEffect } from 'react';
import './CSS/shopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { ChevronDown } from 'lucide-react';
import Item from '../components/Item/Item'
import all_product from '../components/Assets/all_product';
const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);  
  return (
    <div className='shop-category'>
      <img className='banner' src={props.banner} alt="Shop Category Banner" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
      <div className='shop_category-sort'>
         SORT BY <ChevronDown/>
      </div>
      </div>
     <div className='shopcategory_products'>
      {all_product.map((item,i)=>{
        if(props.category===item.category)
        {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        }
        else
        {
            return null
        }
      })}
     </div>
     <div className="shopcategory-loadmore"> 
     Explore More
     </div>
    </div>
  );
};

export default ShopCategory;
