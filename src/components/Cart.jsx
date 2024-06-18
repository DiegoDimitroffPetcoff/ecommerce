import Card from "react-bootstrap/Card";
export function Cart({ id, image, title, category, description, price }) {
  return (
    <ul className="CartUl">
      <li key={id} className="CartArticle">
        <Card style={{ width: "8rem"}}>
          <Card.Img variant="top" src={image} style={{ width: "4rem" }}/>
          <Card.Body>
            <Card.Text>{title}</Card.Text>
            <Card.Subtitle> ${price}</Card.Subtitle>
          </Card.Body>
        </Card>
      </li>
    </ul>
  );
}