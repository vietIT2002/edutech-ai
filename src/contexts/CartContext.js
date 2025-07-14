import React, { createContext, useContext, useEffect, useState } from "react";

// Create Context
const CartContext = createContext();

// Custom hook for easier use
export const useCart = () => useContext(CartContext);

// Cart Provider to wrap around app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage when app starts
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart (if not already added)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      return exists ? prev : [...prev, product];
    });
  };

  // Remove product from cart by ID
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all cart items
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
