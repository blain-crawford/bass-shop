import React, { useState } from 'react';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import bassAmps from '../products/bassAmps';
function AmpPage() {
  return (
    <div>
      <Header />
      <h1>Hello, Amp Page!</h1>
      <IndividualProductLinks />
      {bassAmps.map((amp, ampIndex) => {
        return (
          <img 
            alt={amp.title}
            src={amp.images[0]}
            key={ampIndex}
          />
      )
      })}
    </div>
  );
}

export default AmpPage;