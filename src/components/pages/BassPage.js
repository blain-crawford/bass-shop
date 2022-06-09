/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import basses from '../products/basses';
import { ThemeContext } from '../../contexts/themeContext';
import styles from '../css/ProductPage.module.css';
import { Button } from '@mui/material';
function BassPage() {
  const navigate = useNavigate();
  const cartContext = useContext(ThemeContext);

  const chooseProduct = (productToView) => {
    for (let i = 0; i < basses.length; i++) {
      if (basses[i].id === productToView) {
        cartContext.setCurrentProduct(basses[i]);
        console.log(cartContext.currentProduct);
      }
    }
    console.log(productToView);
  };

  const addToCart = (productToAdd) => {
    cartContext.setCurrentCartContents([
      ...cartContext.currentCartContents,
      productToAdd,
    ]);
    console.log(cartContext.currentCartContents);
  };

  useEffect(() => {
    cartContext.setCartCount(cartContext.currentCartContents.length)
  }, [cartContext.currentCartContents])

  return (
    <div>
      <h1 className={styles.pageTitle}>Basses In Stock</h1>
      <IndividualProductLinks />
      <div className={styles.cardContainer}>
        {basses.map((bass, bassIndex) => {
          return (
            <div key={bassIndex} className={styles.card}>
              <div className={styles.cardImage}>
                <img
                  onClick={() => {
                    chooseProduct(bass.id);
                    navigate(`/product/${cartContext.currentProduct.id}`);
                  }}
                  className={styles.image}
                  key={bassIndex}
                  alt={bass.title}
                  src={bass.images[0]}
                />
              </div>
              <div className={styles.productName}>
                <p>{bass.title}</p>
              </div>
              <div className={styles.price}>
                <h4>
                  {bass.pricing.display} {bass.pricing.currency}
                </h4>
              </div>
              <Button
                variant='none'
                onClick={() => {
                  addToCart(bass);
                }}
                className={styles.addButton}
              >
                Add To Cart
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BassPage;
