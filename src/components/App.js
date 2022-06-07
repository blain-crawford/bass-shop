import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import BassPage from './pages/BassPage';
import AmpPage from './pages/AmpPage';
import PedalPage from './pages/PedalPage';
import ShoppingCart from './pages/ShoppingCart';
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/all-products' element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path='/basses' element={<BassPage />} />
          <Route path='/amps' element={<AmpPage />} />
          <Route path='/pedals' element={<PedalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
