import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import allProducts from '../products/allProducts';

function ShoppingPage({ currentProduct, setCurrentProduct }) {
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
      <Header />
      <h1>Hello, Shopping Page!</h1>
      <IndividualProductLinks />
      {allProducts.map((product, productIndex) => {
        return (
          <img
            onClick={() => {
              chooseProduct(product.id);
              navigate(`/product/${currentProduct}`);
            }}
            key={productIndex}
            alt={product.title}
            src={product.images[0]}
          />
        );
      })}
    </div>
  );
}

export default ShoppingPage;
