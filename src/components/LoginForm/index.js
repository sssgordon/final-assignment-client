import React from "react";
import LoginForm from "./LoginForm";
import { login } from "../../actions/users";
import { connect } from "react-redux";

class LoginFormContainer extends React.Component {
  state = {
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

    this.props.login(this.state);

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    // console.log(this.state);
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { login })(LoginFormContainer);
