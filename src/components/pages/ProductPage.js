import React, { useState } from 'react';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import allProducts from '../products/allProducts';

function ShoppingPage() {
  return (
    <div>
      <Header />
      <h1>Hello, Shopping Page!</h1>
      <IndividualProductLinks />
      {allProducts.map((product, productIndex) => {
        return (
          <img 
            key={productIndex}
            alt={product.title} 
            src={product.images[0]}
          />
        )
      })}
    </div>
  );
}

export default ShoppingPage;
