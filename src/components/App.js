import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import BassPage from './pages/BassPage';
import AmpPage from './pages/AmpPage';
import PedalPage from './pages/PedalPage';
import ShoppingCart from './pages/ShoppingCart';
import IndividualProductPage from './pages/IndividualProductPage';
import { ThemeContext } from '../contexts/themeContext';

function App() {
  const [currentProduct, setCurrentProduct] = useState({});
  // const [currentCartContents, setCurrentCartContents] = useState([]);
  const cartCount = useContext(ThemeContext)
  // useEffect(() => {
  //   setCartCount(currentCartContents.length);
  //   console.log(currentCartContents);
  // }, [currentCartContents]);

  useEffect(() => {
    console.log(cartCount);
  }, [])
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage cartCount={cartCount} />} exact />
          <Route
            path='/all-products'
            element={
              <ProductPage
                // currentCartContents={currentCartContents}
                // setCurrentCartContents={setCurrentCartContents}
                cartCount={cartCount}
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
              />
            }
          />
          <Route
            path='/cart'
            element={
              <ShoppingCart
                cartCount={cartCount}
                setCurrentProduct={setCurrentProduct}
              />
            }
          />
          <Route
            path='/basses'
            element={
              <BassPage
                
                cartCount={cartCount}
                setCurrentProduct={setCurrentProduct}
              />
            }
          />
          <Route
            path='/amps'
            element={
              <AmpPage
                cartCount={cartCount}
                setCurrentProduct={setCurrentProduct}
              />
            }
          />
          <Route
            path='/pedals'
            element={
              <PedalPage
                cartCount={cartCount}
                setCurrentProduct={setCurrentProduct}
              />
            }
          />
          <Route
            path='/product/:id'
            element={
              <IndividualProductPage
                cartCount={cartCount}
                currentProduct={currentProduct}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
