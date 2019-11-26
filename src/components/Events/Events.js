import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";

export default function Events(props) {
  return (
    // need flexbox
    <Fragment>
      {props.events.map(event => {
        return (
          <Card style={{ width: "18rem" }}>
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
