import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import Login from './Pages/login';
import Product from './Pages/product';
import ShopCategory from './Pages/shopCategory';
import Shop from './Pages/shop';
import Cart from './Pages/cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/men_banner.jpeg';
import women_banner from './components/Assets/women_banner.webp';
import kids_banner from './components/Assets/kids_banner.jpg';

const App = () => {
  return (
    <div> 
  
  <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Shop />} />
          <Route  exact path='/mens' element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route  exact  path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route exact  path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route  exact path='/product' element={<Product />} />
          <Route  exact  path='/product/:productId' element={<Product />} />
          <Route exact  path='/cart' element={<Cart />} />
          <Route exact  path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
