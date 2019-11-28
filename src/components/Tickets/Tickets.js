import React, { Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import CreateTicketFormContainer from "../CreateTicketForm";
import { Link } from "react-router-dom";

export default function Tickets(props) {
  if (!props.tickets) {
    return <p>There is no ticket for this event so far!</p>;
  }

  const createTicket = props.user && (
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
          const risk = props.risk(ticket.id);
          return (
            <Link
              to={{ pathname: `/tickets/${ticket.id}`, state: { risk: risk } }}
              key={index}
            >
              <li
                key={index}
                className={
                  risk > 75 ? "red" : props.risk > 25 ? "yellow" : "green"
                }
              >
                {ticket.description}
              </li>
            </Link>
          );
        })}
      </ul>
    </Fragment>
  );
}
