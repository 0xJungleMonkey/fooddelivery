import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function MenuItem({ array }) {
  const cardStyle = {
    height: "100%",
  }; // Set a fixed height for the cards
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {array.map((filterItems) => (
        <Col key={filterItems._id}>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={filterItems.img} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{filterItems.name}</Card.Title>
              <Card.Text>{filterItems.description}</Card.Text>
              <div className="mt-auto d-flex justify-content-between align-items-center">
                <Col sm={6} className="custom-select">
                  <Form.Select aria-label="Default select example">
                    {Array.from(Array(6), (e, i) => {
                      return (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>
                <Col sm={6}>
                  <Button variant="primary" className="ml-2">
                    Add to cart
                  </Button>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default MenuItem;
