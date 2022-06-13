import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import allProducts from '../products/allProducts';
import Header from '../Header';
import styles from '../css/HomePageStyles.module.css'
function HomePage() {
  return (
    <main className={styles.mainPageContainer}>
      <h1 className={styles.pageTitle}>Your One Stop Shop for all things bass gear</h1>
      <div className={styles.previewContainer}>
        <div className={styles.productPreview}></div>
        <div className={styles.productPreview}></div>
      </div>
    </main>
  );
}

export default HomePage;
