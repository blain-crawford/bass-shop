/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import IndividualProductLinks from '../IndividualProductLinks';
import bassAmps from '../products/bassAmps';
import { ThemeContext } from '../../contexts/themeContext';
import styles from '../css/ProductPage.module.css';
import { StyledAddButton } from '../muiStyles/ButtonAndIconStyles';

function AmpPage() {
  const navigate = useNavigate();
  const cartContext = useContext(ThemeContext);

  const chooseProduct = (productToView) => {
    for (let i = 0; i < bassAmps.length; i++) {
      if (bassAmps[i].id === productToView) {
        cartContext.setCurrentProduct(bassAmps[i]);
      }
    }
  };

  const addToCart = (productToAdd) => {
    cartContext.setCurrentCartContents([
      ...cartContext.currentCartContents,
      productToAdd,
    ]);
  };

  useEffect(() => {
    cartContext.setCartCount(cartContext.currentCartContents.length)
  }, [cartContext.currentCartContents])

  return (
    <div>
      <IndividualProductLinks />
      <h1 className={styles.pageTitle}>Bass Amps in Stock</h1>
      <div className={styles.cardContainer}>
        {bassAmps.map((amp, ampIndex) => {
          return (
            <div key={ampIndex} className={styles.card}>
              <div className={styles.cardImage}>
                <img
                  onClick={() => {
                    chooseProduct(amp.id);
                    navigate(`/product/${amp.id}`);
                  }}
                  className={styles.image}
                  key={ampIndex}
                  alt={amp.title}
                  src={amp.images[0]}
                />
              </div>
              <div className={styles.productName}>
                <p>{amp.title}</p>
              </div>
              <div className={styles.price}>
                <h4>
                  {amp.pricing.display} {amp.pricing.currency}
                </h4>
              </div>
              <StyledAddButton
                variant='none'
                onClick={() => {
                  addToCart(amp);
                }}
                className={styles.addButton}
              >
                Add To Cart
              </StyledAddButton>
            </div>
          );
        })}
        );
      </div>
    </div>
  );
}

export default AmpPage;
