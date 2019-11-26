import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavButton(props) {
  if (props.jwt) {
    return <Button variant="dark">User</Button>; // need link and display username (pass as props below)?
  }
  return (
    <Link to="/login">
      <Button variant="primary">Login</Button>
    </Link>
  );
}

export default function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand>TicketExchange</Navbar.Brand>
      </Link>
      <Nav className="mr-auto"></Nav>
      <NavButton jwt={props.jwt} />
    </Navbar>
  );
}
