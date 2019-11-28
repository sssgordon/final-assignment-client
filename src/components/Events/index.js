import React, { Component } from "react";
import Events from "./Events";
import { connect } from "react-redux";
import { getEvents } from "../../actions/events";
import Pagination from "./Pagination";
import "./Events.css";

class EventsContainer extends Component {
  state = {
    loading: false,
    currentPage: 1,
    eventsPerPage: 9
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    this.props.getEvents();
    this.setState({ loading: false });
  };

  render() {
    const indexOfLastEvent = this.state.currentPage * this.state.eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - this.state.eventsPerPage;
    const currentEvents = this.props.events.slice(
      indexOfFirstEvent,
      indexOfLastEvent
    );

    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    return (
      <div className="container mt-5">
        <h1 className="text-dark mb-3 event-title" id="event-title">
          Events
        </h1>
        <Events
          events={currentEvents}
          loading={this.state.loading}
          user={this.props.user}
        />
        <Pagination
          eventsPerPage={this.state.eventsPerPage}
          totalEvents={this.props.events.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { events: state.events, user: state.user }; // need to map user reducer for create event form
};

export default connect(mapStateToProps, { getEvents })(EventsContainer);
