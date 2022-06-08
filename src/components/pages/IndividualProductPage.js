import React, { useState, useEffect } from 'react';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import { useLocation } from 'react-router';
import allProducts from '../products/allProducts';

function IndividualProductPage({ currentProduct, cartCount }) {
  useEffect(()=> {
    console.log(currentProduct)
  }, [])
  return (
    <div>
      <Header cartCount={cartCount} />
      <h2>{currentProduct.title}</h2>
      <IndividualProductLinks />
      {currentProduct.images.map((image, imageIndex) => {
        return <img src={image} key={imageIndex} alt={currentProduct.title} />;
      })}
    </div>
  );
}

export default IndividualProductPage;
