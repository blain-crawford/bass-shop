/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import allProducts from '../products/allProducts';
import { ThemeContext } from '../../contexts/themeContext';
import styles from '../css/IndividualProduct.module.css';
import { Button } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
function IndividualProductPage() {
  const cartContext = useContext(ThemeContext);
  const [selectedBassPic, setSelectedBassPic] = useState(
    cartContext.currentProduct.images[0],
  );

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
      <h2 className={styles.pageTitle}>{cartContext.currentProduct.title}</h2>
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
            <h2>{cartContext.currentProduct.title}</h2>
            <h3>Condition: {cartContext.currentProduct.condition}</h3>
            <h1 className={styles.price}>
              {cartContext.currentProduct.pricing.display} {cartContext.currentProduct.pricing.currency}
            </h1>
          </div>
          <div className={styles.interactionDivButton}>
            <div className={styles.purchaseDetails}>
              <div className={styles.detailDiv}>
                <SavedSearchOutlinedIcon className={styles.detailIcon} />
                <p className={styles.detailDescription}>55-point inspection</p>
              </div>
              <div className={styles.detailDiv}>
                <LocalShippingOutlinedIcon className={styles.detailIcon} />
                <p className={styles.detailDescription}>FREE shipping</p>
              </div>
              <div className={styles.detailDiv}>
                <PersonalVideoOutlinedIcon className={styles.detailIcon} />
                <p className={styles.detailDescription}>FREE tech support</p>
              </div>
              <div className={styles.detailDiv}>
                <MilitaryTechOutlinedIcon className={styles.detailIcon} />
                <p className={styles.detailDescription}>FREE 2-year warranty</p>
              </div>
            </div>
            <Button
              variant='none'
              onClick={() => {
                addToCart(cartContext.currentProduct);
              }}
              className={styles.addButton}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default IndividualProductPage;
