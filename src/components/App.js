import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import BassPage from './pages/BassPage';
import AmpPage from './pages/AmpPage';
import PedalPage from './pages/PedalPage';
import ShoppingCart from './pages/ShoppingCart';
import IndividualProductPage from './pages/IndividualProductPage';
import { ThemeContext } from '../contexts/themeContext';

function App() {
  const cartContext = useContext(ThemeContext);

  useEffect(() => {
    // console.log(cartContext);
    cartContext.setCartCount(cartContext.currentCartContents.length);
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/all-products' element={<ProductPage />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/basses' element={<BassPage />} />
          <Route path='/amps' element={<AmpPage />} />
          <Route path='/pedals' element={<PedalPage />} />
          <Route path='/product/:id' element={<IndividualProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
