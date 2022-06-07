import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import allProducts from '../products/allProducts';
import Header from '../Header';

function HomePage() {
  return (
    <div>
      <Header />
      <h1>Hello, Main Page!</h1>
    </div>
  );
}

export default HomePage;
