/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import IndividualProductLinks from '../IndividualProductLinks';
import allProducts from '../products/allProducts';
import { ThemeContext } from '../../contexts/themeContext';
import styles from '../css/IndividualProduct.module.css';
import { Button } from '@mui/material';
import {
  StyledTechIcon,
  StyledSearchIcon,
  StyledShippingIcon,
  StyledWarrantyIcon,
  StyledAddButton,
} from '../muiStyles/ButtonAndIconStyles';
import { useLocation } from 'react-router';
import { css } from '@emotion/react'

function IndividualProductPage() {
  const cartContext = useContext(ThemeContext);
  const location = useLocation();
  const [hasProduct, setHasProduct] = useState(false);
  const [selectedBassPic, setSelectedBassPic] = useState(null);

  useEffect(() => {
    let productToSearch = location.pathname.split('/');
    productToSearch = productToSearch[productToSearch.length - 1];
    let tempProductToDisplay = allProducts.filter(
      (product) => product.id === productToSearch,
    );
    cartContext.setCurrentProduct(tempProductToDisplay[0]);
    setSelectedBassPic(tempProductToDisplay[0].images[0]);
    setHasProduct(true);
  }, []);

  const addToCart = (productToAdd) => {
    cartContext.setCurrentCartContents([
      ...cartContext.currentCartContents,
      productToAdd,
    ]);
  };

  useEffect(() => {
    cartContext.setCartCount(cartContext.currentCartContents.length);
  }, [cartContext.currentCartContents]);

  return (
    hasProduct && (
      <div>
        <IndividualProductLinks />
        <main className={styles.bassPreviewContainer}>
          <div className={styles.bassPics}>
            {cartContext.currentProduct.images.map((image, imageIndex) => {
              return (
                <img
                  onClick={() => {
                    setSelectedBassPic(image);
                  }}
                  className={styles.thumbNail}
                  src={image}
                  key={imageIndex}
                  alt={cartContext.currentProduct.title}
                />
              );
            })}
          </div>
          <div className={styles.selectedPreview}>
            <img
              className={styles.chosenView}
              src={selectedBassPic}
              alt={cartContext.currentProduct.title}
            />
          </div>
          <div className={styles.productInteractions}>
            <div className={styles.interactionDivPrice}>
              <h2 className={styles.productTitle}>{cartContext.currentProduct.title}</h2>
              <h3 className={styles.productCondition}>Condition: {cartContext.currentProduct.condition}</h3>
              <h1 className={styles.price}>
                {cartContext.currentProduct.pricing.display}{' '}
                {cartContext.currentProduct.pricing.currency}
              </h1>
            </div>
            <div className={styles.interactionDivButton}>
              <div className={styles.purchaseDetails}>
                <div className={styles.detailDiv}>
                  <StyledSearchIcon className={styles.detailIcon} />
                  <p className={styles.detailDescription}>
                    55-point inspection
                  </p>
                </div>
                <div className={styles.detailDiv}>
                  <StyledShippingIcon className={styles.detailIcon} />
                  <p className={styles.detailDescription}>FREE shipping</p>
                </div>
                <div className={styles.detailDiv}>
                  <StyledTechIcon className={styles.detailIcon} />
                  <p className={styles.detailDescription}>FREE tech support</p>
                </div>
                <div className={styles.detailDiv}>
                  <StyledWarrantyIcon className={styles.detailIcon} />
                  <p className={styles.detailDescription}>
                    FREE 2-year warranty
                  </p>
                </div>
              </div>
              <StyledAddButton
                variant='none'
                onClick={() => {
                  addToCart(cartContext.currentProduct);
                }}
                className={styles.addButton}
              >
                Add To Cart
              </StyledAddButton>
            </div>
          </div>
        </main>
      </div>
    )
  );
}

export default IndividualProductPage;
