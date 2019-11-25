import React from "react";
import SignupForm from "./SignupForm";
import { signUp } from "../../actions/users";
import { connect } from "react-redux";

class SignupFormContainer extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.signUp(this.state);

    this.setState({
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    // console.log(this.state);
    return (
      <SignupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { signUp })(SignupFormContainer);
