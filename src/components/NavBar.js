import React, { Component } from "react";
import logo from "../images/logo.svg";
import "./styles/NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="container-fluid">
          <a className="NavBar__brand" href="/">
            <img className="NavBar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}
