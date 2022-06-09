import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function IndividualProductLinks() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <ul style={{display: 'flex', justifyContent: 'space-between', width: '60%', padding: '10px'}}>
        <Link to='/all-products'>All products</Link>
        <Link to='/basses'>Basses</Link>
        <Link to='/amps'>Amps</Link>
        <Link to='/pedals'>Pedals</Link>
      </ul>
    </div>
  );
}

export default IndividualProductLinks;
