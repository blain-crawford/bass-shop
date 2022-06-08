import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import BassPage from './pages/BassPage';
import AmpPage from './pages/AmpPage';
import PedalPage from './pages/PedalPage';
import ShoppingCart from './pages/ShoppingCart';
import IndividualProductPage from './pages/IndividualProductPage';

function App() {
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route
            path='/all-products'
            element={
              <ProductPage
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
              />
            }
          />
          <Route
            path='/cart'
            element={<ShoppingCart setCurrentProduct={setCurrentProduct} />}
          />
          <Route
            path='/basses'
            element={<BassPage setCurrentProduct={setCurrentProduct} />}
          />
          <Route
            path='/amps'
            element={<AmpPage setCurrentProduct={setCurrentProduct} />}
          />
          <Route
            path='/pedals'
            element={<PedalPage setCurrentProduct={setCurrentProduct} />}
          />
          <Route
            path='/product/:id'
            element={<IndividualProductPage currentProduct={currentProduct} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
