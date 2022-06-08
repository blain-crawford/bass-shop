import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import allProducts from '../products/allProducts';
import Header from '../Header';
import ThemeContextProvider from '../../contexts/themeContext';

function HomePage({ cartCount }) {
  return (
    <div>
        <Header cartCount={cartCount} />
      <h1>Hello, Main Page!</h1>
    </div>
  );
}

export default HomePage;
