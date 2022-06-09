import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import basses from '../products/basses';
import { ThemeContext } from '../../contexts/themeContext';

function BassPage() {
  const navigate = useNavigate();
  const cartContext = useContext(ThemeContext);

  const chooseProduct = (productToView) => {
    for (let i = 0; i < basses.length; i++) {
      if (basses[i].id === productToView) {
        cartContext.setCurrentProduct(basses[i]);
        console.log(cartContext.currentProduct);
      }
    }
    console.log(productToView);
  };

  return (
    <div>
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
