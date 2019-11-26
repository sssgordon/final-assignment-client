import React, { Component } from "react";
import Tickets from "./Tickets";
import { connect } from "react-redux";
import { getTickets } from "../../actions/events";
import { Link } from "react-router-dom";

class TicketsContainer extends Component {
  componentDidMount = () => {
    const { eventId } = this.props.match.params;
    this.props.getTickets(eventId);
  };

  render() {
    if (!this.props.tickets.length) {
      return null;
    }

    return <Tickets tickets={this.props.tickets} />;
  }
}

const mapStateToProps = state => {
  return { tickets: state.tickets };
};

export default connect(mapStateToProps, { getTickets })(TicketsContainer);
