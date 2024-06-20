export function CartReducer() {
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
        const newProduct = state.filter(
          (item) => item.product.id !== product.id
        );
        window.localStorage.setItem("cart", JSON.stringify(newProduct));
        return newProduct;
      }
    }
    return state;
  };
  return { initialState, reducer };
}
