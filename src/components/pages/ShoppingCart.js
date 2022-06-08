import React, { useState } from 'react';
import Header from '../Header';

function ShoppingCart({cartCount}) {
  return (
    <div>
      <Header cartCount={cartCount} />
      <h1>Hello, Shopping Cart!</h1>
    </div>
  );
}

export default ShoppingCart;
