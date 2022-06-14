import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ThemeContext } from '../../contexts/themeContext';
import styles from '../css/ShoppingCart.module.css';
import allProducts from '../products/allProducts';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

function ShoppingCart() {
  const [totalCost, setTotalCost] = useState(0);
  const cartContext = useContext(ThemeContext);
  const navigate = useNavigate();

  const chooseProduct = (productToView) => {
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id === productToView) {
        cartContext.setCurrentProduct(allProducts[i]);
      }
    }
  };

  const removeFromCart = (productToRemove) => {
    const newCart = [...cartContext.currentCartContents];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === productToRemove) {
        newCart.splice(newCart.indexOf(newCart[i]), 1);
      }
    }
    cartContext.setCurrentCartContents(newCart);
  };

  useEffect(() => {
    let runningCost = 0;
    for (let i = 0; i < cartContext.currentCartContents.length; i++) {
      runningCost += cartContext.currentCartContents[i].pricing.cost;
    }
    setTotalCost(runningCost);
    cartContext.setCartCount(cartContext.currentCartContents.length);
  }, [cartContext.currentCartContents]);

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.shoppingCartHeader}>
        <ShoppingCartOutlined className={styles.cartIcon}/>
        <h2>Shopping Cart</h2>
      </div>
      <div className={styles.cartContents}>
        {cartContext.currentCartContents.map((product, productIndex) => {
          return (
            <div key={productIndex} className={styles.productFullContainer}>
              <div className={styles.productImageContainer}>
                <img
                  onClick={() => {
                    chooseProduct(product.id);
                    navigate(`/product/${product.id}`);
                  }}
                  alt={product.title}
                  key={productIndex}
                  src={product.images[0]}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productDetails}>
                <h2
                  onClick={() => {
                    chooseProduct(product.id);
                    navigate(`/product/${product.id}`);
                  }}
                  className={styles.productName}
                >
                  {product.title}
                </h2>
                <p className={styles.condition}>
                  Condition: {product.condition}
                </p>
                <p>{product.strings ? `Strings: ${product.strings}` : ''}</p>
                <div className={styles.idAndPrice}>
                  <p style={{ margin: '0', padding: '0' }}>
                    ItemID: {product.id}
                  </p>
                  <p style={{ margin: '0', padding: '0' }}>
                    Price:{product.pricing.display} {product.pricing.currency}
                  </p>
                </div>
                <div className={styles.features}>
                  <p style={{ margin: '0', padding: '0' }}>
                    <span style={{ color: 'green' }}>√</span> In Stock
                  </p>
                  <p style={{ margin: '0', padding: '0' }}>
                    <span style={{ color: 'green' }}>√</span> Free Shipping
                  </p>
                  <p style={{ margin: '0', padding: '0' }}>
                    <span style={{ color: 'green' }}>√</span> Free Tech Support
                  </p>
                  <p style={{ margin: '0', padding: '0' }}>
                    <span style={{ color: 'green' }}>√</span> Free 2-year
                    Warranty
                  </p>
                  <p style={{ margin: '0', padding: '0' }}>
                    <span style={{ color: 'green' }}>√</span> Free Shipping
                  </p>
                </div>
                <p
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                  className={styles.remove}
                >
                  Remove From Cart
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h3>TotalCost: ${totalCost}</h3>
    </div>
  );
}

export default ShoppingCart;
