import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";

export default function Events(props) {
  return (
    <Fragment>
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
