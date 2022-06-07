import React, { useState } from 'react';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
import basses from '../products/basses';
function BassPage() {
  return (
    <div>
      <Header />
      <h1>Hello, Bass Page!</h1>
      <IndividualProductLinks />
      {basses.map((bass, bassIndex) => {
        return (
          <img 
            src={bass.images[0]}
            alt={bass.title}
            key={bassIndex}
          />
        )
      })}
    </div>
  );
}

export default BassPage;