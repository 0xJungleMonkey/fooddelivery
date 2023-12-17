import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link, Navigate, useHistory, useNavigate } from "react-router-dom";
import { useState } from "react";
import TopNav from "../components/TopNav";
const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        address: credentials.address,
      })
    );
    const response = await fetch(
      "http://localhost:5001/user/createuser",
      // "https://fooddelivery-backend-9dwj.onrender.com/menu/items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          address: credentials.address,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      alert("Welcome! Signed up successfully! Please login.");
      navigate("/login");
    } else {
      alert("Enter Valid Credentials");
    }
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <><TopNav/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Set the height of the container to the viewport height
      }}
    >
      <Card style={{ width: "30rem", height: "36rem" }}>
        <Card.Body>
          <Card.Title>Signup</Card.Title>
          <Card.Text>
            Please sign up an account to reserve table, place order and enjoy
            member benefits.
          </Card.Text>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={credentials.name}
                name="name"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={credentials.email}
                name="email"
                onChange={onChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={credentials.password}
                name="password"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                placeholder="Address"
                value={credentials.address}
                name="address"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Receive email notice for orders"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Link to="/login">Login</Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default Signup;
