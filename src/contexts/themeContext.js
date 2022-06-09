import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [cartCount, setCartCount] = useState(0);
  const [currentCartContents, setCurrentCartContents] = useState([]);
  return (
    <ThemeContext.Provider
      value={{
        cartCount,
        setCartCount,
        currentCartContents,
        setCurrentCartContents,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
