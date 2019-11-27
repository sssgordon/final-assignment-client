import React, { Component, Fragment } from "react";
import Details from "./Details";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTickets } from "../../actions/tickets";

class DetailsContainer extends Component {
  componentDidMount = () => {
    this.props.getAllTickets();
  };

  render() {
    if (!this.props.tickets.length) {
      return <p>Loading...</p>;
    }

    const { ticketId } = this.props.match.params;
    const thisTicket = this.props.tickets.find(ticket => ticket.id == ticketId);
    console.log("this ticket test", thisTicket);
    const { description } = thisTicket;

    return (
      <Fragment>
        <Details description={description} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { tickets: state.tickets };
};

export default connect(mapStateToProps, { getAllTickets })(DetailsContainer);