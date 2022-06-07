import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/shop" element={<ProductPage />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
