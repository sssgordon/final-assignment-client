import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SignupForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          name="username"
          placeholder="Enter username"
          onChange={props.onChange}
          value={props.values.username}
        />
      </Form.Group>
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
      <Button variant="primary" type="submit">
        Sign up &amp; Login
      </Button>
    </Form>

    // <form onSubmit={props.onSubmit}>
    //   <input
    //     onChange={props.onChange}
    //     value={props.values.name}
    //     name="name"
    //     placeholder="name"
    //   />
    //   <input
    //     onChange={props.onChange}
    //     value={props.values.email}
    //     name="email"
    //     placeholder="email"
    //   />
    //   <input
    //     onChange={props.onChange}
    //     value={props.values.password}
    //     name="password"
    //     placeholder="password"
    //   />
    //   <button type="submit">Sign up</button>
    // </form>
  );
}