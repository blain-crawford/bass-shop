import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from './css/HeaderAndLinkStyles.module.css';
import basses from './products/basses';
import bassAmps from './products/bassAmps';
import bassPedals from './products/bassPedals';
import allProducts from './products/allProducts';

function IndividualProductLinks() {
  const [allProductsImage, setAllProductsImage] = useState(null);
  const [haveImages, setHaveImages] = useState(false);
  const navigate = useNavigate();

  const pickDisplayItem = (arrayToSearch) => {
    const randomNumber = Math.floor(Math.random() * arrayToSearch.length - 1);
    return arrayToSearch[randomNumber];
  };

  useEffect(() => {
    setAllProductsImage(pickDisplayItem(allProducts).images[0]);
    setHaveImages(true);
  }, []);
  return (
    haveImages && (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul className={styles.linkCardContainer}>
          <div
            onClick={() => {
              navigate('/all-products');
            }}
            className={styles.linkCards}
          >
            <div className={styles.cardImageContainer}>
              <img
                className={styles.cardImage}
                alt='All Products'
                src={allProductsImage}
              />
            </div>
            <Link className={styles.link} to='/all-products'>
              All products
            </Link>
          </div>
          <div
            onClick={() => {
              navigate('/basses');
            }}
            className={styles.linkCards}
          >
            <div className={styles.cardImageContainer}>
              <img
                className={styles.cardImage}
                alt='Basses'
                src={basses[0].images[0]}
              />
            </div>
            <Link className={styles.link} to='/basses'>
              Basses
            </Link>
          </div>
          <div
            onClick={() => {
              navigate('/amps');
            }}
            className={styles.linkCards}
          >
            <div className={styles.cardImageContainer}>
              <img
                className={styles.cardImage}
                alt='Bass Amps'
                src={bassAmps[0].images[0]}
              />
            </div>
            <Link className={styles.link} to='/amps'>
              Amps
            </Link>
          </div>
          <div
            onClick={() => {
              navigate('/pedals');
            }}
            className={styles.linkCards}
          >
            <div className={styles.cardImageContainer}>
              <img
                className={styles.cardImage}
                alt='Bass Pedals'
                src={bassPedals[0].images[0]}
              />
            </div>
            <Link className={styles.link} to='/pedals'>
              Pedals
            </Link>
          </div>
        </ul>
      </div>
    )
  );
}

export default IndividualProductLinks;
