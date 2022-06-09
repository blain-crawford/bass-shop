import { height } from '@mui/system';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import allProducts from '../products/allProducts';
import styles from '../css/ProductPage.module.css';
import ThemeContextProvider from '../../contexts/themeContext';
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

  return (
    <div>
      <h1>Hello, Shopping Page!</h1>
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
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default ProductPage;
