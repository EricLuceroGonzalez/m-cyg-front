import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg } from "reactstrap";
import qr from "../media/logo00.png";

class Home extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    contact: this.props.contact,
    id: this.props.id
  };
  render() {
    return (
      <div
        style={{
          height: "99vh",
          backgroundColor: "rgba(220,220,220,0.5)",
          padding: '100px 20px'
        }}
        className="mr-auto ml-auto col-lg-4 col-md-6 col-10 col-xs-10 col-sm-10 "
      >
        <Link to={"/scanned"}>
          <Card
            style={{
              boxShadow: "4px 3px 6px black",
              padding: '100px 20px'
            }}
          >
            <CardImg top width="30%" src={qr} alt="Card image cap"></CardImg>
          </Card>
        </Link>
      </div>
    );
  }
}

export default Home;
