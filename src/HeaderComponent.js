import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import logo from "./logo.svg";

export class HeaderComponent extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default HeaderComponent;
