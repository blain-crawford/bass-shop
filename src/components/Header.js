/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ThemeContext } from '../contexts/themeContext';
function Header() {
  const cartContext = useContext(ThemeContext);

  return (
    <header
      className='page-header'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid black',
        marginBottom: '20px',
      }}
    >
      <ul style={{ display: 'flex', gap: '70px', margin: '0 auto' }}>
        <Link to='/'>Home</Link>
        <Link to='/all-products'>Products</Link>
        <Link to='/cart'>Shopping Cart</Link>
      </ul>
      <div
        className='cart-display'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          border: '1px solid black',
        }}
      >
        <p
          style={{
            margin: '0',
            padding: '0',
            position: 'relative',
            top: '24px',
            fontSize: '15px',
          }}
        >
          {cartContext.cartCount}
        </p>
        <Link to="/cart">
          <ShoppingCartOutlinedIcon
            style={{color: 'black', fontSize: '70px', position: 'relative', bottom: '10px' }}
        />
        </Link>
      </div>
    </header>
  );
}

export default Header;
