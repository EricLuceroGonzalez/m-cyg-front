import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle
} from "reactstrap";
import qr from "../../media/frame.png";
// import Contact from "./contact";

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

class AccessQR extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    contact: this.props.contact,
    id: this.props.id
  };
  render() {
    return (
      <div className="mr-auto ml-auto col-12 col-md-4 col-6 col-xs-12 col-sm-8 ">
        <Link to={"/scanned"}>
          <Card
            style={{
              margin: "12px auto",
              boxShadow: "4px 3px 6px black",
              backgroundColor: "rgba(212,212,212,1)"
            }}
          >
            <CardHeader style={{ backgroundColor: "rgba(1,1,240,0.75)" }}>
              <div className="row" style={{ padding: "0px 20px" }}>
                <div
                  className="mr-auto"
                  style={impact}
                >
                  {this.state.title}
                </div>
              </div>
            </CardHeader>
            <CardImg top width="30%" src={qr} alt="Card image cap"></CardImg>
            <CardBody>
              <CardTitle style={titleCard}>{this.state.description}</CardTitle>
              <CardSubtitle>
                <span style={{ fontWeight: "bold" }}>Descripcion: </span>
                cool thing
              </CardSubtitle>
              <CardText>
                <span style={{ fontWeight: "bold" }}>Contacto: </span>
                {this.state.contact}
              </CardText>
              <CardText>
                <span style={{ fontWeight: "bold" }}>Id </span>
                {this.state.id}
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </div>
    );
  }
}

export default AccessQR;
