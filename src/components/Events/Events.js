import React, { Fragment } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateEventFormContainer from "../CreateEventForm";

export default function Events(props) {
  const createEvent = props.jwt && (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Create Event
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <CreateEventFormContainer />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
  return (
    // need flexbox
    <Fragment>
      {createEvent}
      {props.events.map(event => {
        return (
          <Card key={event.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={event.imageUrl} />
            <Card.Body>
              <Card.Title>{event.name}</Card.Title>
              <Card.Text>{event.description}</Card.Text>
              <Button variant="primary">Tickets</Button>
            </Card.Body>
          </Card>
        );
      })}
    </Fragment>
  );
}
