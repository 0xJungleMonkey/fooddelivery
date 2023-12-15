import React from "react";
import Theme from "./Theme.js";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { CartWidget } from "./CartWidget.js";
import { Cart3, EggFried } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const TopNav = ({ useNavigate }) => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
  };
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
            <Nav className="me-auto d-flex align-items-center ">
              <Nav.Link href="/">Home</Nav.Link>
              {localStorage.getItem("authToken") ? (
                <>
                  <Nav.Link href="/cart">
                    <CartWidget productsCount="1" />
                  </Nav.Link>
                  <Nav.Link>My orders</Nav.Link>
                  <Nav.Link onClick={handleLogout} href="/login">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              )}

              <Theme />
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
