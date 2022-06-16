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
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../css/carousel.css';
import { carouselImages } from '../products/carouselImages';

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
        <div className={styles.carouselContainer}>
          <h2 className={styles.featuredProducts}>
            Selling popular brands such as
          </h2>
          <Carousel
            width={'100%'}
            showThumbs={false}
            autoPlay
            infiniteLoop
            stopOnHover
          >
            {carouselImages.map((image, imageIndex) => {
              return (
                <div
                  className={styles.carouselImageContainer}
                  onClick={() => {
                    navigate(image.link);
                  }}
                  key={imageIndex}
                >
                  <img
                    className={styles.carouselImage}
                    src={image.src}
                    alt={image.title}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
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
        <h2 className={styles.askAbout}>Make sure to ask about</h2>
        <div className={styles.purchaseDetails}>
          <div className={styles.detailDiv}>
            <StyledSearchIcon className={styles.detailIcon} />
            <h5 className={styles.promise}>Always the Highest Quality</h5>
            <p className={styles.detailDescription}>55-point inspection</p>
          </div>
          <div className={styles.detailDiv}>
            <StyledShippingIcon className={styles.detailIcon} />
            <h5 className={styles.promise}>Always the Fastest Shipping</h5>
            <p className={styles.detailDescription}>FREE 2-day shipping</p>
          </div>
          <div className={styles.detailDiv}>
            <StyledTechIcon className={styles.detailIcon} />
            <h5 className={styles.promise}>the Best Customer Support</h5>
            <p className={styles.detailDescription}>FREE tech support</p>
          </div>
          <div className={styles.detailDiv}>
            <StyledWarrantyIcon className={styles.detailIcon} />
            <h5 className={styles.promise}>Always the Most Coverage</h5>
            <p className={styles.detailDescription}>FREE 2-year warranty</p>
          </div>
        </div>
      </main>
    )
  );
}

export default HomePage;
