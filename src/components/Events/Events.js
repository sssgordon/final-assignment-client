import React, { Fragment } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateEventFormContainer from "../CreateEventForm";
import "./Events.css";

export default function Events({ events, loading, user }) {
  const createEvent = user && (
    <Accordion style={{ marginBottom: "20px" }}>
      <Card style={{ border: "lightgray solid 1px", borderRadius: "5px" }}>
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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Fragment>
      {createEvent}
      <ul className="list-group mb-4">
        {events.map(event => {
          return (
            <Card
              className="bg-dark text-white event-card"
              key={event.id}
              style={{ border: "black solid 1px", borderRadius: "5px" }}
            >
              <Link
                to={`/events/${event.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Card.Img src={event.imageUrl} alt="Card image" />
                <Card.ImgOverlay>
                  <h1 className="event-name">{event.name}</h1>
                  <br></br>
                  <h3 className="event-date">{event.date.slice(0, 10)}</h3>
                </Card.ImgOverlay>
              </Link>
            </Card>
          );
        })}
      </ul>
    </Fragment>
  );
}
