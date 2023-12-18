import React from "react";
import Theme from "./Theme.js";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useState } from "react";
import { CartWidget } from "./CartWidget.js";
import { Cart3, EggFried } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer.js";
const TopNav = () => {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
  };
  const items = useCart();

  const loadCart = () => {
    setCartView(true);
    // navigate("./cart");
    console.log("open modal now");
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
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
            style={{ fontSize: 25, cursor: "pointer" }}
          >
            <EggFried size={35} /> QuickBite
          </Navbar.Brand>
          <div>
            <Nav className="me-auto d-flex align-items-center ">
              {localStorage.getItem("authToken") ? (
                <>
                  <Nav.Link onClick={loadCart}>
                    <CartWidget productsCount={items.length} />
                  </Nav.Link>
                  {cartView && (
                    <Modal onClose={() => setCartView(false)}>
                      <Cart></Cart>
                    </Modal>
                  )}
                  <Nav.Link
                    style={{ color: "white" }}
                    onClick={() => navigate("/orders")}
                  >
                    My orders
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "white" }}
                    onClick={handleLogout}
                    href="/login"
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  {/* <Nav.Link
                    style={{ color: "white" }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </Nav.Link> */}
                  <Nav.Link
                    style={{ color: "white" }}
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Signup
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "white" }}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
