/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import IndividualProductLinks from '../IndividualProductLinks';
import allProducts from '../products/allProducts';
import styles from '../css/ProductPage.module.css';
import { ThemeContext } from '../../contexts/themeContext';
import { StyledAddButton } from '../muiStyles/ButtonAndIconStyles'
function ProductPage() {
  const navigate = useNavigate();
  const cartContext = useContext(ThemeContext);

  const chooseProduct = (productToView) => {
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id === productToView) {
        cartContext.setCurrentProduct(allProducts[i]);
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
    cartContext.setCartCount(cartContext.currentCartContents.length);
  }, [cartContext.currentCartContents]);

  return (
    <div>
      <IndividualProductLinks />
      <h1 className={styles.pageTitle}>All Available Products</h1>
      <main className={styles.cardContainer}>
        {allProducts.map((product, productIndex) => {
          return (
            <div key={productIndex} className={styles.card}>
              <div className={styles.cardImage}>
                <img
                  onClick={() => {
                    chooseProduct(product.id);
                    navigate(`/product/${product.id}`);
                  }}
                  className={styles.image}
                  key={productIndex}
                  alt={product.title}
                  src={product.images[0]}
                />
              </div>
              <div className={styles.productName}>
                <p>{product.title}</p>
              </div>
              <div className={styles.price}>
                <h4>
                  {product.pricing.display} {product.pricing.currency}
                </h4>
              </div>
              <StyledAddButton
                variant='none'
                onClick={() => {
                  addToCart(product);
                }}
                className={styles.addButton}
              >
                Add To Cart
              </StyledAddButton>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default ProductPage;
