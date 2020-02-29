import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg } from "reactstrap";
import qr from "../media/logo00.png";
import Register from "../auth/Register";
import Login from "../auth/Login";
import PhoneInput from "../auth/PhoneIput";

class Home extends Component {

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

<Register></Register>
        
      </div>
    );
  }
}

export default Home;
