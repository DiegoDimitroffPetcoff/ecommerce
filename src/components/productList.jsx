import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export function ProductList({ productsList }) {
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
                  <Button variant="primary">Add</Button>
                </Card.Body>
              </Card>
            </li>
          );
        })}
    </ul>
  );
}
