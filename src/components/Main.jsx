import React from "react";
import PropTypes from "prop-types";
import Example from "./functional/example";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 1200,
    };
  }

  updateAge = () => {
    this.setState({
      age: this.state.age + 12,
    });
  };

  render() {
    return (
      <>
        <h2>{this.state.age}</h2>
        <input type="button" value="update me" onClick={this.updateAge} />
        <img style={{ width: "100px", height: "100px" }} src="./src/assets/images/image2.jpg"/>
        <Example />
      </>
    );
  }
}

Main.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Main;
