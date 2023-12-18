import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Form, Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    );
    const response = await fetch(
      "https://quickbite-htqe.onrender.com/user/login",
      // "http://localhost:5001/user/login",
      // "https://fooddelivery-backend-9dwj.onrender.com/menu/items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userEmail", credentials.email);

      console.log(
        localStorage.getItem("authToken"),
        localStorage.getItem("userEmail")
      );
      navigate("/");
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
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title className="text-center">Sign In</Card.Title>

            <Card.Text>
              Please sign in an account to place order. You may try with the
              following user credentials:
            </Card.Text>
            <Card.Text>Email: example@user.com</Card.Text>
            <Card.Text>Password: exampleuser</Card.Text>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                />
              </Form.Group>
              <div className="d-flex justify-content-center flex-wrap flex-column">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
