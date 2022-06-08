import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ThemeContext } from '../contexts/themeContext';
function Header() {
  const { cartCount } = useContext(ThemeContext)
  

  return (
    <header className="page-header"style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/all-products'>Products</Link>
        <Link to='/cart'>Shopping Cart</Link>
      </ul>
      <div className="cart-display" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <p style={{margin: '0', padding: '0', position: 'relative', top: '40px', fontSize: '20px'}}>{cartCount}</p>
        <ShoppingCartOutlinedIcon style={{fontSize: '80px'}} />
      </div>
    </header>
  );
}

export default Header;
