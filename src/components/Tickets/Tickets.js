import React, { Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import CreateTicketFormContainer from "../CreateTicketForm";
import { Link } from "react-router-dom";
import "./Tickets.css";

export default function Tickets(props) {
  if (!props.tickets) {
    return <p>There is no ticket for this event so far!</p>;
  }

  const createTicket = props.user && (
    <Accordion style={{ margin: "40px auto", width: "1000px" }}>
      <Card style={{ border: "black solid 1px", borderRadius: "5px" }}>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className="create-ticket"
          >
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
      <div className="tickets-page">
        <h1 className="text-dark mb-3 tickets-page-title">{props.eventName}</h1>
        <h3 className="tickets-page-date">{props.eventDate}</h3>
        <h4 className="tickets-page-description">{props.eventDescription}</h4>
        {createTicket}
        <div className="tickets-wrapper">
          {props.tickets.map((ticket, index) => {
            const risk = props.risk(ticket.id);
            const author = ticket.user ? ticket.user.username : ticket.author;
            return (
              <Link
                className="ticket-link"
                to={{
                  pathname: `/tickets/${ticket.id}`,
                  state: { risk: risk }
                }}
                key={index}
              >
                <Card
                  // risk > 75 ? "ticket-card-red" : risk > 25 ? "ticket-card-yellow" : "success"
                  className={
                    risk > 75
                      ? "ticket-card-red"
                      : risk > 25
                      ? "ticket-card-yellow"
                      : "ticket-card-green"
                  }
                >
                  <Card.Header className="ticket-author">{author}</Card.Header>
                  <Card.Body>
                    <Card.Title className="ticket-price">
                      EUR {ticket.price}
                    </Card.Title>
                    <Card.Text className="ticket-description">
                      {ticket.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

{
  /* <ul>
          {props.tickets.map((ticket, index) => {
            const risk = props.risk(ticket.id);
            const author = ticket.user ? ticket.user.username : ticket.author;
            return (
              <Link
                to={{
                  pathname: `/tickets/${ticket.id}`,
                  state: { risk: risk }
                }}
                key={index}
              >
                <li
                  key={index}
                  className={
                    risk > 75 ? "red" : props.risk > 25 ? "yellow" : "green"
                  }
                >
                  {ticket.description} by {author}
                </li>
              </Link>
            );
          })}
        </ul> */
}
