import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import allProducts from '../products/allProducts';
import styles from '../css/HomePageStyles.module.css';
import IndividualProductLinks from '../IndividualProductLinks';
import { ThemeContext } from '../../contexts/themeContext';

function HomePage() {
  const [displayItems, setDisplayItems] = useState([]);
  const [haveItems, setHaveItems] = useState(false);
  const navigate = useNavigate();
  const cartContext = useContext(ThemeContext);

  const pickDisplayItems = (arrayToSearch) => {
    let tempItemArray = [];
    for (let i = 0; i < 4; i++) {
      const randomNumber = Math.abs(
        Math.round(Math.random() * arrayToSearch.length - 1),
      );
      tempItemArray.push(arrayToSearch[randomNumber]);
    }
    setDisplayItems(tempItemArray);
    console.log(tempItemArray);
  };

  useEffect(() => {
    pickDisplayItems(allProducts);
    setHaveItems(true);
  }, []);

  return (
    haveItems && (
      <main className={styles.mainPageContainer}>
        <h1 className={styles.popularCategories}>Popular Categories</h1>
        <IndividualProductLinks />
        <h2 className={styles.featuredProducts}>Featured Products</h2>
        <div className={styles.previewContainer}>
          {displayItems.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className={styles.productPreview}>
                <h4>{item.title}</h4>
                <div className={styles.previewImageContainer}>
                  <img
                    onClick={() => {
                      cartContext.setCurrentProduct(item)
                      navigate(`/product/${item.id}`)
                    }}
                    className={styles.previewImage}
                    src={item.images[0]}
                    alt={item.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    )
  );
}

export default HomePage;
