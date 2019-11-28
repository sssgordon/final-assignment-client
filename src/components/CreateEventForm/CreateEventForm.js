import React from "react";
import { Form, Button } from "react-bootstrap";
import "./CreateEventForm.css";

export default function CreateEventForm(props) {
  return (
    <Form onSubmit={props.onSubmit} className="create-event-form">
      <Form.Group controlId="formGroupName">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          placeholder="Enter event name"
          onChange={props.onChange}
          value={props.values.name}
        />
      </Form.Group>
      <Form.Group controlId="formGroupDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="description"
          name="description"
          placeholder="Enter description"
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
      <Form.Group controlId="formGroupDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          placeholder="Enter event date"
          onChange={props.onChange}
          value={props.values.date}
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        Create Event
      </Button>
    </Form>
  );
}
