import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../context/cartContext";
export function ProductList({ productsList }) {
  const { addToCart } = useContext(CartContext);

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
                    <CiShoppingCart />
                  </Button>
                </Card.Body>
              </Card>
            </li>
          );
        })}
    </ul>
  );
}
