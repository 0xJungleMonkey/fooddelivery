import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import TopNav from "../components/TopNav";
import { Toaster, toast } from "react-hot-toast";

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
      "https://quickbite-htqe.onrender.com/user/createuser",
      // "http://localhost:5001/user/createuser",
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
      toast.success(
        "Welcome! Signed up successfully! " // Set a longer autoClose time for the toast
      );
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      toast.error(
        "Please input valid email and Password should be at least 6 letters."
      );
    }
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
      <TopNav />
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
            <Card.Title className="text-center">Signup</Card.Title>
            <Card.Text>Please sign up an account to place order.</Card.Text>
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
                <Form.Label>Email</Form.Label>
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
              <div className="d-flex justify-content-center flex-column">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Toaster />
                <Link to="/login" className="text-center">
                  Already have account? Login
                </Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Signup;
