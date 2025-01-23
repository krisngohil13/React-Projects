import { createContext,useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';

// Create a context with default values
export const ShoppingCartContext = createContext({
  items: [],
  addItem: () => {},
  updateItemQuantity: () => {},
});


function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];
      
    // Check if item already exists in cart
    const existingItem = updatedItems.find(item => item.id === action.payload);
    
    if (existingItem) {
      // If exists, increase quantity
      existingItem.quantity += 1;
    } else {
      // If new item, add to cart
      const product = DUMMY_PRODUCTS.find(product => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,
       items: updatedItems 
      };
  }

  if (action.type === 'UPDATE_ITEM_QUANTITY') {
    const updatedItems = [...state.items];
    const item = updatedItems.find(item => item.id === action.payload.productId);
    
    item.quantity += action.payload.amount;
    
    // Remove item if quantity is 0 or less
    return {
      ...state,
      items: item.quantity <= 0 
        ? updatedItems.filter(item => item.id !== action.payload.productId)
        : updatedItems
    };
  }


  return state;
}

// Provider component that will wrap our app
export function ShoppingCartProvider({ children }) {
  const [cartState, cartStateDispatch] = useReducer(cartReducer, {
    items: [],
  });

  // Add item to cart
  function handleAddItemToCart(id) {
    cartStateDispatch({
      type: 'ADD_ITEM',
      payload: id,
    });
  }

  // Update item quantity (increase/decrease)
  function handleUpdateCartItemQuantity(productId, amount) {
    cartStateDispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: { productId, amount },
    });
  }

  // Value to be provided to all components
  const cartContext = {
    items: cartState.items,
    addItem: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={cartContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
