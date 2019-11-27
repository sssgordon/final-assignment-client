import React, { Component, Fragment } from "react";
import Details from "./Details";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTickets } from "../../actions/tickets";
import { getComments } from "../../actions/comments";
import { getAllUsers } from "../../actions/users";

class DetailsContainer extends Component {
  componentDidMount = () => {
    this.props.getAllTickets();
    this.props.getComments(this.props.match.params.ticketId);
    this.props.getAllUsers();
  };

  render() {
    if (!this.props.tickets.length) {
      return null;
    }

    const { ticketId } = this.props.match.params;
    const thisTicket = this.props.tickets.find(ticket => ticket.id == ticketId);
    console.log("details ticket id test", ticketId);
    const { description } = thisTicket;
    const { username } = thisTicket.user;
    const { price } = thisTicket;
    const { comments } = this.props;
    console.log("comments test", comments);

    return (
      <Fragment>
        <Details
          description={description}
          username={username}
          price={price}
          comments={comments}
          ticketId={ticketId}
          users={this.props.users}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    comments: state.comments,
    users: state.users
  };
};

export default connect(mapStateToProps, {
  getAllTickets,
  getComments,
  getAllUsers
})(DetailsContainer);
