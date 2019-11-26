import React, { Component } from "react";
import Tickets from "./Tickets";
import { connect } from "react-redux";
import { getEvents } from "../../actions/events";
import { Link } from "react-router-dom";

class TicketsContainer extends Component {
  componentDidMount = () => {
    this.props.getEvents();
  };

  render() {
    const { eventId } = this.props.match.params;
    const event = this.props.events.find(event => event.id == eventId);
    if (!event) {
      return null;
    }
    // console.log("event test", event);
    const tickets = event.tickets;
    // console.log("tickets test", tickets);

    return <Tickets tickets={tickets} event={event} />;
  }
}

const mapStateToProps = state => {
  return { events: state.events };
};

export default connect(mapStateToProps, { getEvents })(TicketsContainer);
