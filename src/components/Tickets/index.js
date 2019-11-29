import React, { Component, Fragment } from "react";
import Tickets from "./Tickets";
import { connect } from "react-redux";
import { getEvents } from "../../actions/events";
import { getTickets, getUserTickets } from "../../actions/tickets";
import { Link } from "react-router-dom";
import "./Tickets.css";

class TicketsContainer extends Component {
  componentDidMount = () => {
    const { eventId } = this.props.match.params;
    this.props.getTickets(eventId);
    this.props.getEvents();
  };

  render() {
    if (!this.props.events.length) {
      return null;
    }

    const noTicket = !this.props.tickets.length && (
      <p className="no-ticket">
        {" "}
        There is no ticket for this event yet. Login to create one.
      </p>
    );

    const event = this.props.events.find(
      event => event.id == this.props.match.params.eventId
    );
    const eventName = event.name;
    const eventDescription = event.description;
    const eventDate = event.date.slice(0, 10);
    const eventId = event.id;

    // risk fraud algorithm
    const risk = ticketId => {
      const ticket = this.props.tickets.find(ticket => ticket.id == ticketId);

      let risk = 0;
      // 1.
      this.props.getUserTickets(ticketId);
      const numOfUserTickets =
        this.props.userTickets && this.props.userTickets.length;
      if (numOfUserTickets === 1) {
        risk += 10;
      }
      // 2.
      const numOfEventTickets = event.tickets && event.tickets.length;
      const totalTicketsPrice =
        event.tickets &&
        event.tickets
          .map(ticket => parseFloat(ticket.price))
          .reduce((acc, cur) => acc + cur, 0);
      const averageTicketPrice = totalTicketsPrice / numOfEventTickets;
      const difference = ticket.price - averageTicketPrice;
      if (difference > 0) {
        const decimalMoreExp = difference / ticket.price;
        const percentageMoreExp = decimalMoreExp * 100;
        percentageMoreExp > 10 ? (risk -= 10) : (risk -= percentageMoreExp);
      } else {
        const decimalCheaper = Math.abs(difference) / ticket.price;
        const percentageCheaper = decimalCheaper * 100;
        risk += percentageCheaper;
      }
      // 3.
      const ticketAddedTime = ticket.createdAt.slice(11, 13);
      if (ticketAddedTime > 9 && ticketAddedTime < 17) {
        risk -= 10;
      } else {
        risk += 10;
      }
      // 4.
      const numOfComments = ticket.comments && ticket.comments.length;
      if (numOfComments > 3) {
        risk += 5;
      }
      // 5.
      if (risk < 5) {
        risk = 5;
      }
      if (risk > 95) {
        risk = 95;
      }

      return Math.ceil(risk);
    };
    // console.log("risky test", risk(1));

    return (
      <Fragment>
        <Tickets
          tickets={this.props.tickets}
          user={this.props.user}
          eventName={eventName}
          eventDescription={eventDescription}
          eventDate={eventDate}
          eventId={eventId}
          risk={risk}
        />
        {noTicket}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: state.user,
    events: state.events,
    userTickets: state.risk.userTickets
  };
};

export default connect(mapStateToProps, {
  getTickets,
  getEvents,
  getUserTickets
})(TicketsContainer);
