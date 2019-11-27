import React from "react";
import { Form, Button } from "react-bootstrap";

export default function CreateCommentForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows="3"
          name="content"
          placeholder="Tell us what you think about this ticket"
          onChange={props.onChange}
          value={props.values.content}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Comment
      </Button>
    </Form>
  );
}
