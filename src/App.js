import React, { Component } from "react";
import logo from "./sallem.jpg";
import "./App.css";
export default class App extends Component {
  state = {
    Person: {
      fullName: "Ghouil Sallem",
      bio: "Software engineer specialized in the development of Information Systems . Having acquired a respectable experience in the development of web applications through the use of the most recent and innovative technologies.",
      imgSrc: { logo },
      profession: "Software engineer",
    },
    show: false,
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
        show: pre.show,
      }));
    }, 1);
  };

  render() {
    return (
      <div>
        {this.state.show && (
          <div>
            <div className="card-container">
              <span className="pro">PRO</span>
              <img
                className="round"
                src={this.state.Person.imgSrc.logo}
                alt="user"
              />
              <h3>{this.state.Person.fullName}</h3>
              <h6>Gafsa</h6>
              <p>
                <h3>{this.state.Person.profession}</h3>
                <br />
                {this.state.Person.bio}
              </p>
              <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary ghost">Following</button>
              </div>
            </div>
          </div>
        )}

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
