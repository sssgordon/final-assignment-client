import React, { Fragment } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateEventFormContainer from "../CreateEventForm";
import "./Events.css";

export default function Events(props) {
  const createEvent = props.jwt && (
    <Accordion>
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
          <Link
            to={`/events/${event.id}`}
            className="event-link"
            key={event.id}
          >
            <div className="event-div">
              <div className="event-img-div">
                <img src={event.imageUrl} alt="event" className="event-img" />
              </div>
              <h1>{event.name}</h1>
              <h2>{event.date.slice(0, 10)}</h2>
            </div>
          </Link>
        );
      })}
    </Fragment>
  );
}

// <Card key={event.id} style={{ width: "18rem" }}>
//   <Card.Img variant="top" src={event.imageUrl} />
//   <Card.Body>
//     <Card.Title>{event.name}</Card.Title>
//     <Card.Text>{event.description}</Card.Text>
//     <Link to={`/events/${event.id}/tickets`}>
//       <Button variant="primary">Tickets</Button>
//     </Link>
//   </Card.Body>
// </Card>
