import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import basses from '../products/basses';

function BassPage({ currentProduct, setCurrentProduct, cartCount }) {
  const navigate = useNavigate();

  const chooseProduct = (productToView) => {
    for (let i = 0; i < basses.length; i++) {
      if (basses[i].id === productToView) {
        setCurrentProduct(basses[i]);
        console.log(currentProduct)
      }
    }
    console.log(productToView);
  };

  return (
    <div>
      <Header cartCount={cartCount}/>
      <h1>Hello, Bass Page!</h1>
      <IndividualProductLinks />
      {basses.map((bass, bassIndex) => {
        return (
          <img
            onClick={() => {
              chooseProduct(bass.id);
              navigate(`/product/${bass.id}`);
            }}
            src={bass.images[0]}
            alt={bass.title}
            key={bassIndex}
          />
        );
      })}
    </div>
  );
}

export default BassPage;
