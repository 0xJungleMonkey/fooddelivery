import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
function Dish() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/random/200*200/?salad"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div>
          <Form.Select
            aria-label="Default select example"
            className="custom-select"
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className="custom-select"
          >
            <option value="Full">Full</option>
            <option value="half">Half</option>
          </Form.Select>
        </div>
        <div>
          <Button variant="primary">Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Dish;
