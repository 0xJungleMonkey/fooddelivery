import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useDispatchCart, useCart } from "./ContextReducer";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

function MenuItem({ item }) {
  let data = useCart();
  let navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatchCart();
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  };
  const handleQty = (e) => {
    setQty(e.target.value);
  };
  const handleAddToCart = async () => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
    let food = null;
    for (const i of data) {
      if (i.id === item._id) {
        food = i;
        break;
      }
    }
    if (food) {
      await dispatch({
        type: "UPDATE",
        id: item._id,
        price: item.price,
        qty: qty,
      });
      console.log("Cart after update:", data);
      return;
    }
    await dispatch({
      type: "ADD",
      id: item._id,
      name: item.name,
      price: item.price,
      qty: qty,
      img: item.img,
    });
    console.log("Cart after update:", data);
  };

  const cardStyle = {
    height: "100%",
  }; // Set a fixed height for the cards
  return (
    <Col key={item._id}>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.price}</Card.Text>

          <div className="mt-auto d-flex justify-content-between align-items-center">
            <Col sm={6} className="custom-select">
              <Form.Select
                aria-label="Default select example"
                onClick={handleClick}
                onChange={handleQty}
              >
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
              <Button
                variant="primary"
                className="ml-2"
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            </Col>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MenuItem;
