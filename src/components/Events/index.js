import React, { Component } from "react";
import Events from "./Events";
import { connect } from "react-redux";
import { getEvents } from "../../actions/events";

class EventsContainer extends Component {
  componentDidMount = () => {
    this.props.getEvents();
  };

  render() {
    return (
      <div>
        <Events events={this.props.events} jwt={this.props.jwt} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { events: state.events, jwt: state.jwt };
};

export default connect(mapStateToProps, { getEvents })(EventsContainer);
