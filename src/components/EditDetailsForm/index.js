import React, { Component, Fragment } from "react";
import EditDetailsForm from "./EditDetailsForm";
import { connect } from "react-redux";
import { editTicket } from "../../actions/tickets";

class EditDetailsFormContainer extends Component {
  state = {
    description: null,
    imageUrl: null,
    price: null
  };

  changed = false;
  change = () => {
    this.changed = true;
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const { ticketId } = this.props.match.params;
    this.props.editTicket(this.state, ticketId);

    this.change();

    this.setState({
      description: null,
      imageUrl: null,
      price: null
    });
  };

  render() {
    return (
      <Fragment>
        <EditDetailsForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          ticketId={this.props.match.params.ticketId}
          changed={this.changed}
        />
      </Fragment>
    );
  }
}

export default connect(null, { editTicket })(EditDetailsFormContainer);
