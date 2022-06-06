import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ShoppingPage from './pages/ShoppingPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/shop" element={<ShoppingPage />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
