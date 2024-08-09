import { Component } from "react";
import { render } from "react-dom";
import User from "./User";
import UserClass from "./UserClass";

import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React !!</h2>
        <UserClass name={"Saili J (classs)"} />
      </div>
    );
  }
}

export default About;
