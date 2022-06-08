import { height } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import allProducts from '../products/allProducts';
import styles from '../css/ProductPage.module.css';

function ShoppingPage({
  currentProduct,
  setCurrentProduct,
  cartCount,
  currentCartContents,
  setCurrentCartContents,
}) {
  const navigate = useNavigate();

  const chooseProduct = (productToView) => {
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id === productToView) {
        setCurrentProduct(allProducts[i]);
        console.log(currentProduct);
      }
    }
    console.log(productToView);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <h1>Hello, Shopping Page!</h1>
      <IndividualProductLinks />
      <main className={styles.CardContainer}>
        {allProducts.map((product, productIndex) => {
          return (
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img
                  onClick={() => {
                    chooseProduct(product.id);
                    navigate(`/product/${currentProduct.id}`);
                    setCurrentCartContents([
                      ...currentCartContents,
                      currentProduct,
                    ]);
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

export default ShoppingPage;
