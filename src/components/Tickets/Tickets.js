import React, { Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import CreateTicketFormContainer from "../CreateTicketForm";
import { Link } from "react-router-dom";

export default function Tickets(props) {
  if (!props.tickets) {
    return <p>There is no ticket for this event so far!</p>;
  }

  const createTicket = props.jwt && (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Create Ticket
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <CreateTicketFormContainer eventId={props.eventId} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );

  return (
    <Fragment>
      <h1>{props.eventName}</h1>
      {createTicket}
      <ul>
        {props.tickets.map((ticket, index) => {
          return (
            <Link to={`/tickets/${ticket.id}`} key={index}>
              <li key={index}>{ticket.description}</li>
            </Link>
          );
        })}
      </ul>
    </Fragment>
  );
}
