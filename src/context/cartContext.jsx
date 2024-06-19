import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setcart] = useState(() => {
    const cartStore = window.localStorage.getItem("cart");
    if (cartStore) {
      return JSON.parse(cartStore);
    } else {
      return [];
    }
  });

  function addToCart(product) {
    const cartItem = cart.find((item) => item.product.id === product.id);
    if (cartItem) {
      setcart((preState) =>
        preState.map((item) => {
          if (item.product.id === product.id) {
            const newProduct = { ...item, quantity: item.quantity + 1 };
            window.localStorage.setItem("cart", JSON.stringify(newProduct));
            return newProduct;
          } else {
            window.localStorage.setItem("cart", JSON.stringify(item));
            return item;
          }
        })
      );
    } else {
      setcart((preState) => {
        const newProduct = [...preState, { product, quantity: 1 }];
        window.localStorage.setItem("cart", JSON.stringify(newProduct));
        return newProduct;
      });
    }
  }

  function deleteProduct(product) {
    setcart((preCart) => {
      const newProduct = preCart.filter(
        (item) => item.product.id !== product.id
      );
      window.localStorage.setItem("cart", JSON.stringify(newProduct));
      return newProduct;
    });
  }
  return (
    <CartContext.Provider value={{ cart, setcart, addToCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
}
