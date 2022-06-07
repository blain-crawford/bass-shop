import React, { useState } from 'react';
import Header from '../Header';
import IndividualProductLinks from '../IndividualProductLinks';
function ShoppingPage() {
  return (
    <div>
      <Header />
      <h1>Hello, Shopping Page!</h1>
      <IndividualProductLinks />
    </div>
  );
}

export default ShoppingPage;
