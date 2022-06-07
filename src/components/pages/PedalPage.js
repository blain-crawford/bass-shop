import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import bassPedals from '../products/bassPedals';

function PedalPage({ currentProduct, setCurrentProduct }) {
  const navigate = useNavigate();

  const chooseProduct = (productToView) => {
    for (let i = 0; i < bassPedals.length; i++) {
      if (bassPedals[i].id === productToView) {
        setCurrentProduct(bassPedals[i]);
        console.log(currentProduct);
      }
    }
    console.log(productToView);
  };
  return (
    <div>
      <Header />
      <h1>Hello, Pedal Page!</h1>
      <IndividualProductLinks />
      {bassPedals.map((pedal, pedalIndex) => {
        return (
          <img
            onClick={() => {
              chooseProduct(pedal.id);
              navigate(`/product/${pedal.id}`);
            }}
            key={pedalIndex}
            alt={pedal.title}
            src={pedal.images[0]}
          />
        );
      })}
    </div>
  );
}

export default PedalPage;
