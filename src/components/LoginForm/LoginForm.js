import React from "react";
import { Form, Button } from "react-bootstrap";

export default function LoginForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={props.onChange}
          value={props.values.email}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={props.onChange}
          value={props.values.password}
        />
      </Form.Group>
      <Button variant="primary" type="submit" href="/">
        Login
      </Button>
    </Form>
  );
}
