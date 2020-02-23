import React, { Component } from "react";
import { CardImg, Spinner } from "reactstrap";
import qrScanned from "../media/logo00.png";
const formBg = {
  backgroundColor: "rgba(222,222,222,0.35)",
  padding: "10px 15px",
  borderRadius: "16px",
  height: "100vh"
};

class LoadingPage extends Component {
  state = {};
  render() {
    return (
      <div
        className="col-12 col-sm-10 col-md-8 col-lg-8 ml-auto mr-auto"
        style={formBg}
      >
        <div className="col-5 mt-4 ml-auto mr-auto">
          <CardImg
            alt="Card image cap....."
            width="65%"
            src={qrScanned}
          ></CardImg>
        </div>
        <div className="col-12 ml-auto mr-auto" style={{ textAlign: "center" }}>
          <Spinner
          type='grow'
            style={{
              marginTop: "50%",
              width: "5rem",
              height: "5rem",
              color: "#ff6a00"
            }}
          />
        </div>
      </div>
    );
  }
}

export default LoadingPage;
