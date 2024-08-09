import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("child constructor");

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saili21");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log("child componentDidMount");
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child unmount");
  }

  render() {
    console.log("child render");

    const { count } = this.state;
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: @saili21</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * ------Mounting-------
 * Constructor(dummy)
 * Render(dummy)
 *    <HTML dummy>
 * component did mount
 *     API call
 *      this.setstate --- state varibale updated
 *
 * ------Update------
 *      render(API data)
 *      <HTML api data>
 * component did update
 *
 * ---------Unmouting--------
 *  component will unmount
 */
