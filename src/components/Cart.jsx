import Card from "react-bootstrap/Card";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
export function Cart() {
  const { cart, setcart } = useContext(CartContext);

  return (
    <ul className="CartUl">
      {cart.map((product) => {
        return (
          <li key={product.product.id} className="CartArticle">
            <Card
              style={{
                width: "8rem",
                alignContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={product.product.image}
                style={{ width: "4rem" }}
              />
              <Card.Body>
                <Card.Text>
                  Quantity: <strong>{product.quantity}</strong>
                </Card.Text>
                <Card.Subtitle> ${product.product.price}</Card.Subtitle>
              </Card.Body>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
