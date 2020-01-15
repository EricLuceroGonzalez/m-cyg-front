import React, { Component } from "react";
import { CardImg, Container, Button } from "reactstrap";
// import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import qrScanned from "../media/logo00.png";

// import api from "../api/index";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/formStyle.css";
import "../styles/main.css";
import "../styles/jello.css";
import { Link } from "react-router-dom";

const formBg = {
  backgroundColor: "white",
  padding: "20px 15px 45px 15px",
  borderRadius: "16px",
  heigth: "100hv"
};

class ActivateQr extends Component {
  state = {
    formClassName: "",
    modal: false,
    thumb: Boolean,
    receivePromos: false,
    contact: "",
    email: "",
    date: "",
    formErrors: { email: "" },
    emailValid: false,
    formValid: false,
    activeBtn: false
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={`col-11 col-xs-10 col-md-10 col-sm-12 col-lg-8 mt-4 ml-auto mr-auto ${this.state.formClassName}`}
          //   style={allBg}
          style={formBg}
        >
          <div className="col-8 mt-4 ml-auto mr-auto">
            <CardImg
              alt="Card image cap....."
              width="75%"
              src={qrScanned}
            ></CardImg>
          </div>

          <div
            className="container-activate-camera-btn m-t-25"
            style={{ margin: "45% auto" }}
          >
            <div
              className="col-12 mb-3"
              // style={{
              //   border: "1px solid red"
              // }}
            >
              <div className="col-12 d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={faCamera}
                  style={{
                    fontSize: "8em",
                    alignContent: "center",
                    color: "#ff6a00"
                  }}
                ></FontAwesomeIcon>
              </div>
            </div>

            <Link to={'/ActivateCamera'}>
              <Button
                className="activate-camera-btn text-question"
                onClick={this.sendFormData}
              >
                Activar camara
              </Button>
            </Link>
          </div>

          <Container className="col-12 container-fluid">
            <p
              style={{ fontSize: "1.4em" }}
              className="text-b d-flex justify-content-center
              text-question"
            >
              Instrucciones de uso
            </p>
            <div className="row">
              <div className="steps-div text-question">
                1<p>Activa la camara de tu celular</p>
              </div>
              <div className="steps-div text-question">
                2<p>Escanea el codigo QR en pantalla</p>
              </div>
              <div className="steps-div text-question">
                3<p>Llena el formulario comenta y gana</p>
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default ActivateQr;
