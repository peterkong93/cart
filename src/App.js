import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Product from "./components/Product";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [searchvalue, setSearchValue] = React.useState("");
  const [cart, setCart] = React.useState([]);
  const [show, setShow] = React.useState(false);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Product
              searchvalue={searchvalue}
              setCart={setCart}
              cart={cart}
              show={show}
              setShow={setShow}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
