import React, { Component, Fragment } from "react";
import EditDetailsForm from "./EditDetailsForm";
import { connect } from "react-redux";
import { editTicket } from "../../actions/tickets";

class EditDetailsFormContainer extends Component {
  state = {
    description: "",
    imageUrl: "",
    price: ""
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
    const { description, imageUrl, price } = this.state;
    this.props.editTicket(
      description,
      imageUrl,
      price,
      ticketId,
      this.props.jwt
    );

    this.change();

    this.setState({
      description: "",
      imageUrl: "",
      price: ""
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

const mapStateToProps = state => {
  return { jwt: state.user.jwt };
};

export default connect(mapStateToProps, { editTicket })(
  EditDetailsFormContainer
);
