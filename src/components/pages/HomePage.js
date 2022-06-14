import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import allProducts from '../products/allProducts';
import styles from '../css/HomePageStyles.module.css';
import IndividualProductLinks from '../IndividualProductLinks';
import { ThemeContext } from '../../contexts/themeContext';
import {
  StyledAddButton,
  StyledSearchIcon,
  StyledShippingIcon,
  StyledTechIcon,
  StyledWarrantyIcon,
} from '../muiStyles/ButtonAndIconStyles';
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
                <p className={styles.inStock}>In Stock</p>
                <div className={styles.previewImageContainer}>
                  <img
                    onClick={() => {
                      cartContext.setCurrentProduct(item);
                      navigate(`/product/${item.id}`);
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
        <h2>Make sure to ask about</h2>
        <div className={styles.purchaseDetails}>
          <div className={styles.detailDiv}>
            <StyledSearchIcon className={styles.detailIcon} />
            <p className={styles.detailDescription}>55-point inspection</p>
          </div>
          <div className={styles.detailDiv}>
            <StyledShippingIcon className={styles.detailIcon} />
            <p className={styles.detailDescription}>FREE shipping</p>
          </div>
          <div className={styles.detailDiv}>
            <StyledTechIcon className={styles.detailIcon} />
            <p className={styles.detailDescription}>FREE tech support</p>
          </div>
          <div className={styles.detailDiv}>
            <StyledWarrantyIcon className={styles.detailIcon} />
            <p className={styles.detailDescription}>FREE 2-year warranty</p>
          </div>
        </div>
      </main>
    )
  );
}

export default HomePage;
