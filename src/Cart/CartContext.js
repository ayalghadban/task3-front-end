import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // تحميل البيانات من localStorage عند بدء التطبيق
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];

  });
  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      // البحث عن العنصر في السلة بنفس الاسم وسعة المحرك واللون
      const existingItemIndex = prevItems.findIndex(item =>
        item.name === newItem.name &&
        item.engineCapacity === newItem.engineCapacity &&
        item.color === newItem.color
      );

      if (existingItemIndex >= 0) {
        // عنصر موجود بالفعل، قم بتحديث الكمية والسعر
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + newItem.quantity,
          price: updatedItems[existingItemIndex].price + newItem.price * newItem.quantity
        };
        return updatedItems;
      } else {
        // العنصر غير موجود، قم بإضافته
        return [...prevItems, newItem];
      }
    });
  };


  useEffect(() => {
    // تحديث localStorage عند تغير cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);