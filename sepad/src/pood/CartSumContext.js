import React, { createContext, useState } from 'react';


export const CartSumContext = createContext();


export const CartSumContextProvider = ({ children }) => {
  const [cartSum, setCartSum] = useState(calculateCartSum());

  function calculateCartSum() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0
    cart.forEach(oneProduct => total = total + oneProduct.product.price * oneProduct.quantity);
    return total.toFixed(2);
  }

  const contextValue = {
    cartSum,
    setCartSum,
  };
return (
    <CartSumContext.Provider value={contextValue}>
      {children}
    </CartSumContext.Provider>
  );
};