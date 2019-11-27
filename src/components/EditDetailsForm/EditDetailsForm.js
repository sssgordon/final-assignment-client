import React from "react";
import { Form, Button } from "react-bootstrap";

export default function EditDetailsForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Group controlId="formGroupDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="description"
          name="description"
          placeholder="new description"
          onChange={props.onChange}
          value={props.values.description}
        />
      </Form.Group>
      <Form.Group controlId="formGroupImageUrl">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="imageUrl"
          name="imageUrl"
          placeholder="http://"
          onChange={props.onChange}
          value={props.values.imageUrl}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="price"
          name="price"
          placeholder="€ 00.00"
          onChange={props.onChange}
          value={props.values.price}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Edit Ticket
      </Button>
    </Form>
  );
}
