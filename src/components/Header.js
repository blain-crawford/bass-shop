/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/themeContext';
import styles from '../components/css/HeaderStyles.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { StyledShoppingCart } from './muiStyles/ButtonAndIconStyles';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
function Header() {
  const cartContext = useContext(ThemeContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoAndCart}>
        <h1 className={styles.shopLogo}>Bass Shop</h1>
        <div
          className={styles.cartDisplay}
        >
          <p
            className={styles.cartCount}
          >
            {cartContext.cartCount}
          </p>
          <Link to='/cart'>
            <StyledShoppingCart
              className='shopping-cart'
            />
          </Link>
        </div>
      </div>
      <div className={styles.navBar}>
        <ul className={styles.links}>
          <Link to='/'>Home</Link>
          <Link to='/all-products'>Products</Link>
          <Link to='/cart'>Shopping Cart</Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
