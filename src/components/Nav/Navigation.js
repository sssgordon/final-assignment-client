import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

export default function Navigation(props) {
  // ternary for login or user icon
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TicketExchange</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link href="#home">Events</Nav.Link>
      </Nav>
      <Button variant="primary">Login</Button>
    </Navbar>
  );
}
