import { createContext, useReducer } from "react";
import { CartReducer } from "../reducer/cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { reducer, initialState } = CartReducer();
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
