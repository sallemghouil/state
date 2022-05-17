import React, { Component } from 'react'

export default class Profile extends Component {
    state={
        comp:0
    }
    componentDidMount = () => {
        setInterval(() => {
          this.setState((pre) => ({
            comp: pre.comp+1,
          }));
        }, 1000);
      };
  render() {
    return (
      <div><div>
      <div className="card-container">
        <span className="pro">PRO</span>
        <img
          className="round"
          src={this.props.state.Person.imgSrc.logo}
          alt="user"
        />
        <h3>{this.props.state.Person.fullName}</h3>
        <h6>Gafsa</h6>
        <p>
          <h3>{this.props.state.Person.profession}</h3>
          <br />
          {this.props.state.Person.bio}
        </p>
        <div className="buttons">
          <button className="primary">{this.state.comp}</button>
          <button className="primary ghost">Following</button>
        </div>
      </div>
    </div></div>
    )
  }
}
