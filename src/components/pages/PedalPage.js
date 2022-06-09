/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import bassPedals from '../products/bassPedals';
import { ThemeContext } from '../../contexts/themeContext';
import styles from '../css/ProductPage.module.css';
import { Button } from '@mui/material';
function PedalPage() {
  const navigate = useNavigate();
  const cartContext = useContext(ThemeContext);

  const chooseProduct = (productToView) => {
    for (let i = 0; i < bassPedals.length; i++) {
      if (bassPedals[i].id === productToView) {
        cartContext.setCurrentProduct(bassPedals[i]);
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
    cartContext.setCartCount(cartContext.currentCartContents.length);
  }, [cartContext.currentCartContents]);

  return (
    <div>
      <h1 className={styles.pageTitle}>Pedals in Stock</h1>
      <IndividualProductLinks />
      <div className={styles.cardContainer}>
        {bassPedals.map((pedal, pedalIndex) => {
          return (
            <div key={pedalIndex} className={styles.card}>
              <div className={styles.cardImage}>
                <img
                  onClick={() => {
                    chooseProduct(pedal.id);
                    navigate(`/product/${cartContext.currentProduct.id}`);
                  }}
                  className={styles.image}
                  key={pedalIndex}
                  alt={pedal.title}
                  src={pedal.images[0]}
                />
              </div>
              <div className={styles.productName}>
                <p>{pedal.title}</p>
              </div>
              <div className={styles.price}>
                <h4>
                  {pedal.pricing.display} {pedal.pricing.currency}
                </h4>
              </div>
              <Button
                variant='none'
                onClick={() => {
                  addToCart(pedal);
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

export default PedalPage;
