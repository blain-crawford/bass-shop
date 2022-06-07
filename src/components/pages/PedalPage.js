import React, { useState } from 'react';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import bassPedals from '../products/bassPedals';
function PedalPage() {
  return (
    <div>
      <Header />
      <h1>Hello, Pedal Page!</h1>
      <IndividualProductLinks />
      {bassPedals.map((pedal, pedalIndex) => {
        return (
          <img 
            key={pedalIndex}
            alt={pedal.title}
            src={pedal.images[0]}
          />
        )
      })}
    </div>
  );
}

export default PedalPage;