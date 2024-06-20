import { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

const initialState = JSON.parse(window.localStorage.getItem("cart")) || [];
const reducer = (state, action) => {
  const { type, payload: product } = action;
  switch (type) {
    case "ADD_TO_CART": {
      const cartItem = state.find((item) => item.product.id === product.id);
      if (cartItem) {
        const newState = state.map((item) => {
          if (item.product.id === product.id) {
            const newProduct = { ...item, quantity: item.quantity + 1 };
            window.localStorage.setItem("cart", JSON.stringify(state));
            return newProduct;
          } else {
            window.localStorage.setItem("cart", JSON.stringify(state));
            return item;
          }
        });
        return newState;
      } else {
        const newProduct = [...state, { product, quantity: 1 }];
        window.localStorage.setItem("cart", JSON.stringify(newProduct));
        return newProduct;
      }
    }
    case "DELENTE_PRODUCT": {
      const newProduct = state.filter((item) => item.product.id !== product.id);
      window.localStorage.setItem("cart", JSON.stringify(newProduct));
      return newProduct;
    }
  }
  return state;
};

export function CartProvider({ children }) {
  /*   const [cart, setcart] = useState(() => {
    const cartStore = window.localStorage.getItem("cart");
    if (cartStore) {
      return JSON.parse(cartStore);
    } else {
      return [];
    }
  }); */

  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(product) {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  function deleteProduct(product) {
    dispatch({ type: "DELENTE_PRODUCT", payload: product });
  }
  return (
    <CartContext.Provider value={{ cart: state, addToCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
}
