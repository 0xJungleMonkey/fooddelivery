// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
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
            <Card.Body>
              <Card.Title>{filterItems.name}</Card.Title>
              <Card.Text>{filterItems.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default MenuItem;
// function MenuItem() {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img
//         variant="top"
//         src="https://source.unsplash.com/random/200*200/?salad"
//       />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <div>
//           <Form.Select
//             aria-label="Default select example"
//             className="custom-select"
//           >
//             {Array.from(Array(6), (e, i) => {
//               return (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               );
//             })}
//           </Form.Select>
//           <Form.Select
//             aria-label="Default select example"
//             className="custom-select"
//           >
//             <option value="Full">Full</option>
//             <option value="half">Half</option>
//           </Form.Select>
//         </div>
//         <div>
//           <Button variant="primary">Add to cart</Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }

// export default MenuItem;
