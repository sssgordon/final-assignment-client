import React, { Component, Fragment } from "react";
import CreateTicketForm from "./CreateTicketForm";
import { connect } from "react-redux";
import { createTicket } from "../../actions/tickets";

class CreateTicketFormContainer extends Component {
  state = {
    description: "",
    imageUrl: "",
    price: "",
    eventId: this.props.eventId
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createTicket(
      this.state.description,
      this.state.imageUrl,
      this.state.price,
      this.state.eventId,
      this.props.jwt // this will become userId at the backend
    );

    this.setState({
      description: "",
      imageUrl: "",
      price: ""
    });
  };

  render() {
    return (
      <Fragment>
        <CreateTicketForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { jwt: state.jwt };
};

export default connect(mapStateToProps, { createTicket })(
  CreateTicketFormContainer
);
