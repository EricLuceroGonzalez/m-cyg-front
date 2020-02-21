import React, { Component } from "react";
import {
  Label,
  CardImg,
  Form,
  Button,
  ButtonGroup,
  FormGroup
} from "reactstrap";
import { Link } from "react-router-dom";
import qrScanned from "../media/logo00.png";
import CheckItem from "./CheckItem";
import apis from "../api";
import thumbUp from "../media/comentaygana-10.png";
import thumbDown from "../media/comentaygana-10upside.png";

const formBg = {
  backgroundColor: "rgba(222,222,222,0.35)",
  padding: "10px 15px",
  borderRadius: "16px"
};

const formFill = {
  color: "gray",
  fontSize: "0.85em",
  fontFamily: "Montserrat",
  margin: "10px 2px",
  fontWeight: "lighter"
};

const checkedThing = { backgroundColor: "red" };

class ScannedCodeCheck extends Component {
  state = {
    lists: "",
    formClassName: "",
    coupons: [],
    qACheck: false,
    qBCheck: false,
    thumb: "",
    comment:"",
    defaultCheckAa: false,
    defaultCheckAb: false
  };

  componentDidMount() {
    // console.log(`The id props: ${this.props.match.params.id}`);
    apis
      .getCoupon(this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({ coupons: res.data });
      })
      .catch(err => console.log(err));
  }

  checkBoxToggle = e => {
    console.log(e.target.value);
    this.setState({
      qACheck: e.target.value
    });
  };
  siguienteButton = () =>{
    console.log(this.state);
    
  }

  checkBoxToggleB = e => {
    console.log(e.target.value);
    this.setState({
      qBCheck: e.target.value
    });
  };

  handleIconClick = e => {
    e.preventDefault();
    console.log(`Up: ${this.state.activeThumbUp}`);
    this.setState({
      activeThumbUp: !this.state.activeThumbUp
    });

    if (
      e.target.attributes.value.value !== null &&
      typeof e.target.attributes.value.value !== "undefined"
    ) {
      // console.log("-------------");
      const name = e.target.attributes.name.value;
      // console.log(name);
      const IconValue = e.target.attributes.value.value;
      this.setState({ [name]: IconValue });
    }
    console.log(this.state);
  };

  clicked = e => {
    e.preventDefault();
    console.log(`Down: ${this.state.activeThumbDown}`);
    this.setState({
      activeThumbDown: !this.state.activeThumbDown
    });

    if (
      e.target.attributes.value.value !== null &&
      typeof e.target.attributes.value.value !== "undefined"
    ) {
      const name = e.target.attributes.name.value;
      const IconValue = e.target.attributes.value.value;
      this.setState({ [name]: IconValue });
    }
  };
  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  render() {
    let btn_sel = this.state.qACheck
      ? "button_yes ml-auto mr-auto"
      : "button_yes:disabled ml-auto mr-auto";

    let btn_selB = this.state.qBCheck
      ? "button_yes ml-auto mr-auto"
      : "button_yes:disabled ml-auto mr-auto";
    return (
      <div
        className={`col-12 col-sm-10 col-md-8 col-lg-8 ml-auto mr-auto ${this.state.formClassName}`}
        style={formBg}
      >
        <div className="col-8 mt-4 ml-auto mr-auto">
          <CardImg
            alt="Card image cap....."
            width="65%"
            src={qrScanned}
          ></CardImg>
        </div>

        <Form
          // style={formBg}
          className="col-sm-10 col-xs-12 ml-auto mr-auto"
          onReset={this.resetForm}
        >
          <div className="mt-5 mb-3 justify-content-center text-question">
            <h3 style={{ fontSize: "1.45em", textAlign: "center" }}>
              {this.state.coupons.questionA}
            </h3>
          </div>
          <div
            className="col-6 ml-auto mr-auto"
            style={{ border: "1px dashed" }}
          >
            <ButtonGroup className="col-12 ml-auto mr-auto">
              <Button
                value={true}
                onClick={e => this.checkBoxToggle(e)}
                className={btn_sel}
              >
                Si
              </Button>
              <div className="ml-4 mr-4"> </div>
              <Button
                value={false}
                onClick={e => this.checkBoxToggle(e)}
                className={btn_sel}
              >
                No
              </Button>
            </ButtonGroup>
          </div>

          <div className="mt-5 mb-3 text-question">
            <h3 style={{ fontSize: "1.45em", textAlign: "center" }}>
              {this.state.coupons.questionB}
            </h3>
          </div>

          <div
            className="col-6 ml-auto mr-auto"
            style={{ border: "1px dashed" }}
          >
            <ButtonGroup className="col-12 ml-auto mr-auto">
              <Button
                value={true}
                onClick={e => this.checkBoxToggleB(e)}
                className={btn_selB}
              >
                Si
              </Button>
              <div className="ml-4 mr-4"> </div>
              <Button
                value={false}
                onClick={e => this.checkBoxToggleB(e)}
                className={btn_selB}
              >
                No
              </Button>
            </ButtonGroup>
          </div>

          <div className="justify-content-center mt-5">
            <Label
              style={{ margin: "0px auto", textAlign: "center" }}
              className="text-question"
            >
              Volverias a nuestras instalaciones?
            </Label>
          </div>
          <div className="login100-form-titledatos">
            <div
              // style={{ border: "1px solid red" }}
              name="thumb"
              onClick={this.handleIconClick.bind(this)}
              data-id="1"
              className={this.state.activeThumbUp ? "jello-horizontal" : "none"}
            >
              <img
                name="thumb"
                value="true"
                src={thumbUp}
                width="90px"
                alt="manito"
              ></img>
            </div>
            <div
              // style={{ border: "1px solid green" }}
              name="thumb"
              onClick={this.clicked.bind(this)}
              data-id="2"
              className={
                this.state.activeThumbDown ? "jello-horizontal" : "none"
              }
            >
              <img
                name="thumb"
                value="false"
                src={thumbDown}
                width="90px"
                alt="manito"
              ></img>
            </div>
          </div>

          <FormGroup>
            <Label>
              <div style={{ margin: "0px auto", textAlign: "center" }}>
                <div className=" text-title-orange">
                  Comparte tu experiencia
                </div>
                <div className=" text-title-orange">Dejanos un comentario</div>
              </div>
            </Label>
            <div className="wrap-input100datos mt-4 mb-4">
              <textarea
                className="input100"
                onChange={event => this.handleUserInput(event)}
                style={formFill}
                type="text"
                name="comment"
                id="input-comenta"
                value={this.state.comment}
                rows="5"
                placeholder="..."
              ></textarea>
              <span className="focus-input100"></span>
            </div>
          </FormGroup>
          <div className="container-login100-form-btn mt-5">
            
              <Button
              onClick={this.siguienteButton}
                // style={{
                //   backgroundColor: "rgba(0,0,0,0)",
                //   border: "0px solid rgba(0,0,0,0)"
                // }}
              >
                Siguiente
              </Button>

          </div>
        </Form>
      </div>
    );
  }
}

export default ScannedCodeCheck;
