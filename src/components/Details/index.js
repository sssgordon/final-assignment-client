import React, { Component, Fragment } from "react";
import Details from "./Details";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTickets } from "../../actions/tickets";
import { getComments } from "../../actions/comments";
import { getEvents } from "../../actions/events";
import { getUserTickets } from "../../actions/tickets";

class DetailsContainer extends Component {
  componentDidMount = () => {
    this.props.getAllTickets();
    this.props.getComments(this.props.match.params.ticketId);
    this.props.getEvents();

    // const ticket = this.props.tickets.find(
    //   ticket => ticket.id == this.props.match.params.ticketId
    // );
    this.props.getUserTickets(this.props.match.params.ticketId);
  };

  render() {
    if (!this.props.tickets.length) {
      return null;
    }

    // details
    const { ticketId } = this.props.match.params;
    const thisTicket = this.props.tickets.find(ticket => ticket.id == ticketId);
    const { description } = thisTicket;
    const username = thisTicket.user
      ? thisTicket.user.username
      : thisTicket.author;
    const { price } = thisTicket;
    const { comments } = this.props;
    const event =
      this.props.events.length &&
      this.props.events.find(event => event.id == thisTicket.eventId);

    // fraud risk

    return (
      <Fragment>
        <Details
          description={description}
          username={username}
          price={price}
          comments={comments}
          ticketId={ticketId}
          event={event}
          thisUsername={this.props.username}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    comments: state.comments,
    events: state.events,
    username: state.user.username,
    risk: state.risk
  };
};

export default connect(mapStateToProps, {
  getAllTickets,
  getComments,
  getEvents,
  getUserTickets
})(DetailsContainer);
