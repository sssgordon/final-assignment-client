import React, { Component, Fragment } from "react";
import Details from "./Details";
import { connect } from "react-redux";
import { getAllTickets } from "../../actions/tickets";
import { getComments } from "../../actions/comments";
import { getEvents } from "../../actions/events";
import { getUserTickets } from "../../actions/tickets";

class DetailsContainer extends Component {
  state = {
    loading: null
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    this.props.getEvents();
    this.props.getUserTickets(this.props.match.params.ticketId);
    this.props.getAllTickets();
    this.props.getComments(this.props.match.params.ticketId);
    this.setState({ loading: false });
  };

  render() {
    const { ticketId } = this.props.match.params;
    const thisTicket =
      this.props.tickets.length &&
      this.props.tickets.find(ticket => ticket.id == ticketId);
    const { description } = thisTicket;
    const { imageUrl } = thisTicket;
    const username = thisTicket.user
      ? thisTicket.user.username
      : thisTicket.author;
    const { price } = thisTicket;
    const { comments } = this.props;
    const event =
      this.props.events.length &&
      this.props.events.find(event => event.id == thisTicket.eventId);

    // fraud risk
    // console.log("ticket test", this.props.tickets.length);
    // 1.
    const numOfUserTickets =
      this.props.tickets.length &&
      this.props.tickets.filter(ticket => ticket.userId == thisTicket.userId)
        .length;

    // console.log("num of user tickets", numOfUserTickets);
    // 2.
    const numOfEventTickets =
      this.props.tickets.length &&
      this.props.tickets.filter(ticket => ticket.eventId == thisTicket.eventId)
        .length;

    // console.log("num of event tickets", numOfEventTickets);
    const totalTicketsPrice =
      this.props.tickets.length &&
      this.props.tickets
        .filter(ticket => ticket.eventId == thisTicket.eventId)
        .map(ticket => parseFloat(ticket.price))
        .reduce((acc, cur) => acc + cur, 0);

    const averageTicketPrice = totalTicketsPrice / numOfEventTickets;

    // 3.
    const ticketAddedTime = thisTicket && thisTicket.createdAt.slice(11, 13);

    // 4.
    const numOfComments = thisTicket.comments && thisTicket.comments.length;

    const risk = () => {
      let risk = 0;

      // 1.
      if (numOfUserTickets === 1) {
        risk += 10;
      }

      // 2.
      const difference = price - averageTicketPrice;
      if (difference > 0) {
        const decimalMoreExp = difference / price;
        const percentageMoreExp = decimalMoreExp * 100;
        percentageMoreExp > 10 ? (risk -= 10) : (risk -= percentageMoreExp);
      } else {
        const decimalCheaper = Math.abs(difference) / price;
        const percentageCheaper = decimalCheaper * 100;
        risk += percentageCheaper;
      }

      // 3.
      if (ticketAddedTime > 9 && ticketAddedTime < 17) {
        risk -= 10;
      } else {
        risk += 10;
      }

      // 4.
      if (numOfComments > 3) {
        risk += 5;
      }

      console.log("fraud risk test", risk);

      // 5.
      if (risk < 5) {
        risk = 5;
      }
      if (risk > 95) {
        risk = 95;
      }

      return Math.ceil(risk);
    };

    const fraudRisk = risk();

    return (
      <Fragment>
        <Details
          loading={this.state.loading}
          description={description}
          username={username}
          price={price}
          comments={comments}
          ticketId={ticketId}
          event={event}
          thisUsername={this.props.username}
          risk={fraudRisk}
          imageUrl={imageUrl}
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
    username: state.user.username
  };
};

export default connect(mapStateToProps, {
  getAllTickets,
  getComments,
  getEvents,
  getUserTickets
})(DetailsContainer);
