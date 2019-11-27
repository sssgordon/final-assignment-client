import React, { Component, Fragment } from "react";
import Details from "./Details";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DetailsContainer extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <Fragment>
        <Details />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { tickets: state.tickets };
};

export default connect(mapStateToProps)(DetailsContainer);
