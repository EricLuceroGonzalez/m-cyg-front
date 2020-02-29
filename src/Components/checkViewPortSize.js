import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg } from "reactstrap";
import qr from "../media/logo00.png";

class CheckViewPort extends Component {
  // state = {
  //   title: this.props.title,
  //   description: this.props.description,
  //   contact: this.props.contact,
  //   id: this.props.id
  // };
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div
        style={{
          height: "99vh",
          backgroundColor: "rgba(220,220,220,0.5)",
          padding: "100px 0px"
        }}
        className="mr-auto ml-auto col-12 col-sm-10 col-md-12 col-lg-10"
      >
        <div className="mr-auto ml-auto">
          {this.state.width} x {this.state.height}
        </div>
        <Link to={"/scanned"}>
          <Card
            className="col-6 col-sm-8 col-md-4 col-lg-4 mr-auto ml-auto"
            style={{
              boxShadow: "4px 3px 6px black",
              padding: "100px 20px"
            }}
          >
            <CardImg top width="30%" src={qr} alt="Card image cap"></CardImg>
          </Card>
        </Link>
      </div>
    );
  }
}

export default CheckViewPort;
