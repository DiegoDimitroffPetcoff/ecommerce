import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../context/cartContext";
export function ProductList({ productsList }) {
  const { cart, setcart } = useContext(CartContext);

  function addToCart(product) {
    const cartItem = cart.find((item) => item.product.id === product.id);
    console.log(cartItem);

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
  return (
    <ul>
      {productsList &&
        productsList.map((product) => {
          return (
            <li key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Subtitle>Category: {product.category}</Card.Subtitle>

                  <Card.Text>{product.description}</Card.Text>
                  <Card.Subtitle>Price: ${product.price}</Card.Subtitle>
                  <Button onClick={() => addToCart(product)} variant="primary">
                    Add
                  </Button>
                </Card.Body>
              </Card>
            </li>
          );
        })}
    </ul>
  );
}
