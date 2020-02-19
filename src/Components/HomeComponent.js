import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg } from "reactstrap";
import qr from "../media/logo00.png";

const titleCard = {
  fontSize: "1.25em",
  fontWeight: "bolder",
  borderBottom: "2px solid gray"
};
const impact = {
  color: "white",
  fontWeight: "bolder",
  fontSize: "1.5em",
  padding: "5px 14px",
  textShadow: "2px 2px 1px black"
};

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
