import React from "react";
import { CardImg, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import qrScanned from "../media/logo-manito-regalo-white.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../styles/main.css'

const formBg = {
  backgroundColor: "white",
  padding: "10px 15px",
  borderRadius: "16px"
};

class ContactInfo extends React.Component {
  state = {};

  render() {
    return (
      <div
        className={`col-xs-10 col-md-10 col-sm-10 col-lg-6 mt-4 ml-auto mr-auto ${this.state.formClassName}`}
        style={formBg}
      >
        <div className="col-4 col-md-6 col-lg-4 mt-4 ml-auto mr-auto"
        style={{backgroundColor: '#3b5998', borderRadius: '30% 0px 30% 0%'}}
        >
          <CardImg
            alt="Card image cap....."
            width="25%"
            src={qrScanned}
          ></CardImg>
        </div>

        <div
          className="row"
          style={{
            margin: "10% auto 20% auto",
            color: "#4267B2",
            fontSize: "2em",
            textAlign: "center",
            alignContent: "center"
          }}
        >
<span className='mt-2 mb-4 text-title-blue  ml-auto mr-auto'>
Informacion de contacto
</span>
          <Button
            className="btn-facebook col-10 m-auto text-title-white"
            style={{ backgroundColor: "#ff6a00", fontSize: "0.75em" }}
          >
            <div className="row">
              <div
                style={{
                    margin: "0px 12px",
                  textAlign: "initial"
                }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    fontSize: "3em"
                  }}
                />
              </div>
              <div
                style={{
                  margin: "0px auto",
                  textAlign: "center",
                  fontSize: "1.45em"
                }}
              >
                <div>
                  comenta<span className="text-title-blue">y</span>gana
                </div>
              </div>
            </div>
          </Button>
          <Button
            className="btn-facebook col-10 mt-3 ml-auto mr-auto"
            style={{ backgroundColor: "#ff6a00", fontSize: "0.75em" }}
          >
            <div className="row">
              <div
                style={{
                  margin: "0px 12px",
                  textAlign: "initial"
                }}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    fontSize: "3em"
                    // color: "#3b5998"
                  }}
                />
              </div>
              <div
                style={{
                  margin: "0px auto",
                  textAlign: "center",
                  fontSize: "1.45em"
                }}
              >
                <div className="text-title-white">info@comentaygana.com</div>
              </div>
            </div>
          </Button>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
