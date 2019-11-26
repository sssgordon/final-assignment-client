import React, { Component } from "react";
import Nav from "./Navigation";
import { connect } from "react-redux";
import { tsThisType } from "@babel/types";

class NavigationContainer extends Component {
  render() {
    // const path = this.props.match.params.path;
    return <Nav jwt={this.props.jwt} />;
  }
}

const mapStateToProps = state => {
  return { jwt: state.jwt };
};

export default connect(mapStateToProps)(NavigationContainer);
