import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import allProducts from '../products/allProducts';
import { ThemeContext } from '../../contexts/themeContext';

function IndividualProductPage() {
  const cartContext = useContext(ThemeContext);
  useEffect(() => {
    console.log(cartContext.currentProduct);
  }, []);
  return (
    <div>
      <h2>{cartContext.currentProduct.title}</h2>
      <IndividualProductLinks />
      {cartContext.currentProduct.images.map((image, imageIndex) => {
        return (
          <img
            src={image}
            key={imageIndex}
            alt={cartContext.currentProduct.title}
          />
        );
      })}
    </div>
  );
}

export default IndividualProductPage;
