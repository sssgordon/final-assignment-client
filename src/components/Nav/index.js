import React, { Component } from "react";
import Nav from "./Navigation";
import { connect } from "react-redux";

class NavigationContainer extends Component {
  render() {
    // const path = this.props.match.params.path;
    return <Nav jwt={this.props.jwt} />;
  }
}

const mapStateToProps = state => {
  return { jwt: state.user.jwt };
};

export default connect(mapStateToProps)(NavigationContainer);
