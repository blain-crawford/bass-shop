import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import bassAmps from '../products/bassAmps';

function AmpPage({ currentProduct, setCurrentProduct }) {
  const navigate = useNavigate();

  const chooseProduct = (productToView) => {
    for (let i = 0; i < bassAmps.length; i++) {
      if (bassAmps[i].id === productToView) {
        setCurrentProduct(bassAmps[i]);
        console.log(currentProduct);
      }
    }
    console.log(productToView);
  };

  return (
    <div>
      <Header />
      <h1>Hello, Amp Page!</h1>
      <IndividualProductLinks />
      {bassAmps.map((amp, ampIndex) => {
        return (
          <img
            onClick={() => {
              chooseProduct(amp.id);
              navigate(`/product/${currentProduct}`);
            }}
            alt={amp.title}
            src={amp.images[0]}
            key={ampIndex}
          />
        );
      })}
    </div>
  );
}

export default AmpPage;
