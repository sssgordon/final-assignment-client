import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  // ternary for login or user icon
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TicketExchange</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Link to="/login">
        <Button variant="primary">Login</Button>
      </Link>
    </Navbar>
  );
}
