import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [cartCount, setCartCount] = useState(0);
  const [currentCartContents, setCurrentCartContents] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  return (
    <ThemeContext.Provider
      value={{
        cartCount: cartCount,
        setCartCount: setCartCount,
        currentCartContents: currentCartContents,
        setCurrentCartContents: setCurrentCartContents,
        currentProduct: currentProduct,
        setCurrentProduct: setCurrentProduct
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
