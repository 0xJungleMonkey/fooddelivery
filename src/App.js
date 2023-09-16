import "./App.css";
import Login from "./screens/Login";

import Signup from "./screens/Signup";
import Home from "./screens/Home";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        {/* <Theme /> */}
      </div>
    </Router>
  );
}

export default App;
