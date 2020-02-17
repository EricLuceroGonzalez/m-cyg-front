import React, { Component } from "react";
import "../styles/navStyle.css";

import { CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import qrScanned from "../media/Comentaygana-07.png";
import "../styles/main.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const linksNavs = {
      margin: "0px 5px",
      fontFamily: "Montserrat-BlackItalic"
    };

    const linksNav = {
      margin: "0px 5px",
      color: "#3b5999",
      fontFamily: "Montserrat-BlackItalic"
    };
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav
        className="navbar navbar-expand-lg transparent-nav"
        style={{
          boxShadow: "2px 2px 3px black",
          backgroundColor: "rgba(100,100,100,0.2)",
          border: "2px dashed green"
        }}
      >
        <div className="container">
          <Link to={"/"}>
            <span className="navbar-brand col-8">
              <CardImg
                alt="Card image cap....."
                width="10px"
                src={qrScanned}
              ></CardImg>
            </span>
          </Link>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#3b5999", fontSize: "0.8em" }}
              ></FontAwesomeIcon>
            </span>
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul
              className="navbar-nav mr-auto"
              style={{ border: "1px dashed blue", color: "red" }}
            >
              <li>
                <Link to={"/comments"} style={linksNavs}>
                  Comentarios
                </Link>
              </li>
              <li>
                <Link to={"/activate"} style={linksNavs}>
                  Camera
                </Link>
              </li>
              <li>
                <Link to={"/scanned"} style={linksNavs}>
                  scanned
                </Link>
              </li>
              <li>
                <Link to={"/scanned1"} style={linksNavs}>
                  scanned1
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} style={linksNav}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/Contact"} style={linksNav}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
