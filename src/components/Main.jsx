import React from "react";
import PropTypes from "prop-types";

class Main extends React.Component {
  data = () => {};

  render() {
    return <h2>Hello React  !!!1200</h2>;
  }
}

Main.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Main;
