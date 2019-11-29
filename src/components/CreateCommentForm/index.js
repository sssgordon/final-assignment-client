import React, { Component, Fragment } from "react";
import CreateCommentForm from "./CreateCommentForm";
import { createComment } from "../../actions/comments";
import { connect } from "react-redux";

class CreateCommentFormContainer extends Component {
  state = {
    content: "",
    ticketId: this.props.ticketId
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createComment(
      this.state.content,
      this.state.ticketId,
      this.props.jwt
    );

    this.setState({
      content: ""
    });
  };

  render() {
    // console.log("create comment form container state test", this.state);
    return (
      <Fragment>
        <CreateCommentForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { jwt: state.user.jwt };
};

export default connect(mapStateToProps, { createComment })(
  CreateCommentFormContainer
);
