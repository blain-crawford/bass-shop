import Button from '@mui/material/Button';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import IndividualProductLinks from '../IndividualProductLinks';
import allProducts from '../products/allProducts';
import styles from '../css/ProductPage.module.css';
import { ThemeContext } from '../../contexts/themeContext';

function ProductPage() {
  const navigate = useNavigate();
  const cartContext = useContext(ThemeContext);

  const chooseProduct = (productToView) => {
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id === productToView) {
        cartContext.setCurrentProduct(allProducts[i]);
        console.log(cartContext.currentProduct);
      }
    }
    console.log(productToView);
  };

  const addToCart = (productToAdd) => {
    cartContext.setCurrentCartContents([...cartContext.currentCartContents, productToAdd]);
    console.log(cartContext.currentCartContents);
  }

  useEffect(() => {
    cartContext.setCartCount(cartContext.currentCartContents.length)
  }, [cartContext.currentCartContents])

  return (
    <div>
      <h1 className={styles.pageTitle}>All Available Products!</h1>
      <IndividualProductLinks />
      <main className={styles.CardContainer}>
        {allProducts.map((product, productIndex) => {
          return (
            <div key={productIndex} className={styles.card}>
              <div className={styles.cardImage}>
                <img
                  onClick={() => {
                    chooseProduct(product.id);
                    navigate(`/product/${cartContext.currentProduct.id}`);
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
                <h4>{product.pricing.display} {product.pricing.currency}</h4>
              </div>
              <Button onClick={() => {addToCart(product)}} className={styles.addButton}>Add To Cart</Button>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default ProductPage;
