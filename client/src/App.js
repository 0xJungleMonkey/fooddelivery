import "./App.css";
import Login from "./screens/Login";
import "./App.scss";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import Cart from "./screens/Cart";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screens/Myorder";
import Darkmode from "darkmode-js";
import ReactGA from "react-ga";

function App() {
  ReactGA.pageview(window.location.pathname + window.location.search);

  const options = {
    label: "🌓", // default: ''
  };

  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/orders" element={<MyOrder />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
