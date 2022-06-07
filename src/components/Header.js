import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/all-products'>Products</Link>
        <Link to='/cart'>Shopping Cart</Link>
      </ul>
    </div>
  );
}

export default Header;
