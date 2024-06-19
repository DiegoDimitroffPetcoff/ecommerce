import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setcart] = useState([]);

  function addToCart(product) {
    const cartItem = cart.find((item) => item.product.id === product.id);

    if (cartItem) {
      setcart((preState) =>
        preState.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setcart((preState) => [...preState, { product, quantity: 1 }]);
    }
  }


  function deleteProduct(product) {
    const cartFiltered = cart.filter((item)=>item.product.id !== product.id)
    setcart(cartFiltered)
  }
  return (
    <CartContext.Provider value={{ cart, setcart, addToCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
}
