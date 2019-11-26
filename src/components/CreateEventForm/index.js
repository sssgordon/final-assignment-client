import React, { Component, Fragment } from "react";
import CreateEventForm from "./CreateEventForm";
import { connect } from "react-redux";
import { createEvent } from "../../actions/events";

class CreateEventFormContainer extends Component {
  state = {
    name: "",
    description: "",
    imageUrl: "",
    date: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createEvent(this.state);

    this.setState({
      name: "",
      description: "",
      imageUrl: "",
      date: ""
    });
  };

  render() {
    return (
      <Fragment>
        <CreateEventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </Fragment>
    );
  }
}

export default connect(null, { createEvent })(CreateEventFormContainer);
