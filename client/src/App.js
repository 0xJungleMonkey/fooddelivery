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
function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
