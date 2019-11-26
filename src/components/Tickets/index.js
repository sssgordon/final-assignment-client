import React, { Component, Fragment } from "react";
import Tickets from "./Tickets";
import { connect } from "react-redux";
import { getEvents } from "../../actions/events";
import { getTickets } from "../../actions/tickets";
import { Link } from "react-router-dom";

class TicketsContainer extends Component {
  componentDidMount = () => {
    const { eventId } = this.props.match.params;
    this.props.getTickets(eventId);
    this.props.getEvents();
  };

  render() {
    // if (!this.props.tickets.length) {
    //   return null;
    // }

    const noTicket = !this.props.tickets.length && (
      <p>There is no ticket for this event yet!</p>
    );

    const event =
      this.props.events.length &&
      this.props.events.find(
        event => event.id == this.props.match.params.eventId
      );
    const eventName = event.event;
    const eventId = event.id;

    return (
      <Fragment>
        <Tickets
          tickets={this.props.tickets}
          jwt={this.props.jwt}
          eventName={eventName}
          eventId={eventId}
        />
        {noTicket}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { tickets: state.tickets, jwt: state.jwt, events: state.events };
};

export default connect(mapStateToProps, { getTickets, getEvents })(
  TicketsContainer
);