import Container from "react-bootstrap/Container";
import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderBar = ({ searchvalue, setSearchValue,setShow }) => {
  const handleUserInput = (e) => {
    setSearchValue(e.target.value);
  };
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ABC online store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="form-group">
              <input
                type="search"
                value={searchvalue}
                className="form-control"
                id="searchform"
                onChange={handleUserInput}
                placeholder="Search Here"
              />
            </div>
          </Nav>
          <Button variant="primary" onClick={handleShow}>
            View Cart
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
