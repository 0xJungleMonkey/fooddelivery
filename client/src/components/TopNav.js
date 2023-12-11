import React from "react";
import Theme from "./Theme.js";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { Cart3, EggFried } from "react-bootstrap-icons";

const TopNav = () => {
  return (
    <div>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        fixed="top"
        className="custom-nav"
      >
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: 25 }}>
            <EggFried size={35} /> QuickBite
          </Navbar.Brand>
          <div>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="#">
                <Cart3 />
              </Nav.Link>
            </Nav>
          </div>
          <Theme />
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
