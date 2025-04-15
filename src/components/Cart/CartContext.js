import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();
const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find(i => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items
          .map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: action.payload.quantity }
              : i
          )
          .filter(i => i.quantity > 0)
      };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    () => {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addItem = item =>
    dispatch({ type: 'ADD_ITEM', payload: item });
  const updateQuantity = (id, qty) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: qty } });
  const removeItem = id =>
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  const clearCart = () =>
    dispatch({ type: 'CLEAR_CART' });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <CartContext.Provider value={{
      items: state.items,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
