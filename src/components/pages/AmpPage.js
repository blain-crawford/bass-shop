import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import bassAmps from '../products/bassAmps';
import { ThemeContext } from '../../contexts/themeContext';
function AmpPage() {
  const navigate = useNavigate();
  const cartContext = useContext(ThemeContext);

  const chooseProduct = (productToView) => {
    for (let i = 0; i < bassAmps.length; i++) {
      if (bassAmps[i].id === productToView) {
        cartContext.setCurrentProduct(bassAmps[i]);
        console.log(cartContext.currentProduct);
      }
    }
    console.log(productToView);
  };

  return (
    <div>
      <h1>Hello, Amp Page!</h1>
      <IndividualProductLinks />
      {bassAmps.map((amp, ampIndex) => {
        return (
          <img
            onClick={() => {
              chooseProduct(amp.id);
              navigate(`/product/${amp.id}`);
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
