import React, { Component } from "react";
import logo from "./sallem.jpg";
import "./App.css";
import Profile from "./Profile";
export default class App extends Component {
  state = {
    Person: {
      fullName: "Ghouil Sallem",
      bio: "Software engineer specialized in the development of Information Systems . Having acquired a respectable experience in the development of web applications through the use of the most recent and innovative technologies.",
      imgSrc: { logo },
      profession: "Software engineer",
    },
    show: false,
    comp:0
  };
  handleShowPerson = () => {
    this.setState({
      ...this.state.Person,
      show: !this.state.show,
    });
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState((pre) => ({
        comp: pre.comp+1,
      }));
    }, 1000);
  };

  render() {
    return (
      <div>
        {this.state.show && <Profile state={this.state}/>}

        <button
          className="primary ghost"
          onClick={this.handleShowPerson}
          style={{ backgroundColor: "#231E39" }}
        >
          HOME
        </button>
      </div>
    );
  }
}
