import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import { CartContext } from "../context/cartContext";
import { useContext } from "react";

export function Cart() {
  const { cart, deleteProduct, addToCart } = useContext(CartContext);

  return (
    <>
      {cart && cart.length > 0 ? (
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
                    <div>
                      <Button
                        onClick={() => addToCart(product.product)}
                        variant="primary"
                      >
                        <CiShoppingCart />
                      </Button>
                      <Button
                        onClick={() => deleteProduct(product.product)}
                        variant="primary"
                      >
                        <MdOutlineDeleteForever />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="ECart">
          <IoCartOutline />
        </div>
      )}
    </>
  );
}
