import { createContext, useState } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';

// Create a context with default values
export const ShoppingCartContext = createContext({
  items: [],
  addItem: () => {},
  updateItemQuantity: () => {},
});

// Provider component that will wrap our app
export function ShoppingCartProvider({ children }) {
  // State to store cart items
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  // Add item to cart
  function handleAddItemToCart(id) {
    setShoppingCart((prevCart) => {
      const updatedItems = [...prevCart.items];
      
      // Check if item already exists in cart
      const existingItem = updatedItems.find(item => item.id === id);
      
      if (existingItem) {
        // If exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // If new item, add to cart
        const product = DUMMY_PRODUCTS.find(product => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    });
  }

  // Update item quantity (increase/decrease)
  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevCart) => {
      const updatedItems = [...prevCart.items];
      const item = updatedItems.find(item => item.id === productId);
      
      item.quantity += amount;
      
      // Remove item if quantity is 0 or less
      return {
        items: item.quantity <= 0 
          ? updatedItems.filter(item => item.id !== productId)
          : updatedItems
      };
    });
  }

  // Value to be provided to all components
  const cartContext = {
    items: shoppingCart.items,
    addItem: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={cartContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
