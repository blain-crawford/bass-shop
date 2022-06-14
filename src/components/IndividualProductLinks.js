import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from './css/HeaderStyles.module.css'
function IndividualProductLinks() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <ul style={{display: 'flex', justifyContent: 'space-between', width: '60%', padding: '10px'}}>
        <div>
          <Link className={styles.link} to='/all-products'>All products</Link>
        </div>
        <div>
          <Link className={styles.link} to='/basses'>Basses</Link>
        </div>
        <div>
          <Link className={styles.link} to='/amps'>Amps</Link>
        </div>
        <div>
          <Link className={styles.link} to='/pedals'>Pedals</Link>
        </div>
      </ul>
    </div>
  );
}

export default IndividualProductLinks;
