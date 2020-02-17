import React, { Component } from "react";
import { Link } from 'react-router-dom';

import {
  CardImg,
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label
} from "reactstrap";
import qrScanned from "../media/comentaygana02.png";
import api from "../api/index";
import thumbUp from "../media/comentaygana-10.png";
import thumbDown from "../media/comentaygana-10upside.png";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/formStyle.css";
import "../styles/main.css";
import "../styles/jello.css";
// const impact = {
//   color: "white",
//   fontWeight: "bolder",
//   fontSize: "2.5em",
//   padding: "5px 14px",
//   textShadow: "2px 4px 2px black",
//   margin: "12px auto"
// };

const formFill = {
  color: "gray",
  fontSize: "0.85em",
  fontFamily: "Montserrat",
  margin: "10px 2px",
  fontWeight: "lighter"
};

const formBg = {
  backgroundColor: "white",
  padding: "10px 15px",
  borderRadius: "16px"
};

class ScannedCodeInput extends Component {
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

  sendFormData = () => {
    console.log("inside sendFormData()");
    console.log(this.state);
    this.setState({ formClassName: "goForm" });

    api
      .postForm(this.state)
      .then(res => {
        this.setState({ formClassName: "goForm" });
        console.log({
          mensaje: "Post exitoso",
          response: res.data
        });
        this.setState({
          modal: true
        });
      })
      .catch(err => {
        this.setState({ formClassName: "errorForm" });
        console.log({
          mensaje: "Post Fallido",
          response: err.data
        });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("----------- handleSubmit -----------");
    if (this.state.formClassName === "goForm") {
      console.log("----------- handleSubmit -----------");
      e.target.reset();
    } else {
      console.log("----------- handleSubmit -----------");
      console.log("shit!");
      console.log(this.state.date);
    }
  };

  resetForm = () => {
    this.setState({ comment: "" });
  };

  checkBoxToggle = e => {
    this.state.receivePromos
      ? this.setState({ receivePromos: false })
      : this.setState({ receivePromos: true });

    console.log(this.state.receivePromos);
  };
  inputChange = e => {
    e.preventDefault();
    const name = e.target.attributes.name.value;
    const value = e.target.value;
    console.log(e.target);

    console.log(name);
    console.log(value);
    this.setState({ [name]: value });

    console.log(this.state);
  };

  handleIconClick = e => {
    e.preventDefault();

    console.log(e.target.attributes.value.value);
    console.log(this.state.activeThumbUp);
    console.log(`Up: ${this.state.activeThumbUp}`);
    this.setState({
      activeThumbUp: !this.state.activeThumbUp
    });
    console.log(this.state.activeThumbUp);

    if (
      e.target.attributes.value.value !== null &&
      typeof e.target.attributes.value.value !== "undefined"
    ) {
      console.log("-------------");
      const name = e.target.attributes.name.value;
      console.log(name);
      const IconValue = e.target.attributes.value.value;
      console.log(`icon value: ${IconValue}`);
      this.setState({ [name]: IconValue });
    }
    console.log(this.state);
  };

  toggleModal = e => {
    e.preventDefault();
    if (this.state.formClassName === "goForm") {
      e.preventDefault();
      this.setState({
        modal: false
      });
      this.setState({
        formClassName: "",
        thumb: Boolean,
        receivePromos: false,
        contact: "",
        email: "",
        date: ""
      });
      console.log("aaaaaaaaaaaaa");
      console.log(e);
      console.log(this.state);
    } else {
      e.preventDefault();
      console.log(e);
    }
  };

  clicked = e => {
    e.preventDefault();
    console.log(e.target.attributes.value.value);
    console.log(this.state.activeThumbDown);
    console.log(`Up: ${this.state.activeThumbDown}`);
    this.setState({
      activeThumbDown: !this.state.activeThumbDown
    });
    console.log(this.state.activeThumbDown);

    if (
      e.target.attributes.value.value !== null &&
      typeof e.target.attributes.value.value !== "undefined"
    ) {
      console.log("-------------");
      const name = e.target.attributes.name.value;
      console.log(name);
      const IconValue = e.target.attributes.value.value;
      console.log(`icon value: ${IconValue}`);
      this.setState({ [name]: IconValue });
      console.log(this.state);
    }
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`change e = ${e}`);
    // console.log(`change value = ${value}`);
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
    console.log(this.getCurrentDate());
    this.setState({ date: this.getCurrentDate() });
    // console.log(this.state);
  };
  //Validation of fields:
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    // let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " incorrecto";
        break;
      // case "password":
      //   passwordValid = value.length >= 6;
      //   fieldValidationErrors.password = passwordValid ? "" : " is too short";
      //   break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid
        // passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  getCurrentDate = () => {
    let separator = "-";
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date} ${hour}:${minutes}:${seconds}`;
  };
  render() {
    return (
      <React.Fragment>
        {/* 
          <div className="col-12 mr-auto ml-auto" style={{ padding: "5px 10px" }}>
          <Card className="col-10 mr-auto ml-auto col-lg-5 col-md-8 col-xs-12">
            <CardImg
              alt="Card image cap....."
              width="75%"
              src={qrScanned}
            ></CardImg>
          </Card>
        </div>
        */}
        <div
          className={`col-xs-10 col-md-10 col-sm-12 col-lg-8 mt-4 ml-auto mr-auto ${this.state.formClassName}`}
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
            className="col-sm-8 col-xs-12 ml-auto mr-auto"
            onReset={this.resetForm}
          >
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
                className={
                  this.state.activeThumbUp ? "jello-horizontal" : "none"
                }
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
                  <div className=" text-title-orange">Comparte tu experiencia</div>
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

            {/* <Button onClick={this.state.sendTeamData}>Submit</Button> */}
            <div className="container-login100-form-btn m-t-25">
              <Link to={'/checkPrice'}>
              <Button
                className="login100-form-btn text-title-white"
                style={{ textTransform: "uppercase", background: "#ff6a00" }}
                // onClick={this.sendFormData}
              >
                Comentar
              </Button>
              </Link>
            </div>

            <div className="container-login100-form-btn m-t-25">
              <Link to={'/checkError'}>
              <Button
                className="login100-form-btn text-title-white"
                style={{ textTransform: "uppercase", background: "#ff6a00" }}
                // onClick={this.sendFormData}
              >
                Comentar - error
              </Button>
              </Link>
            </div>

          </Form>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
              Comentario enviado!
            </ModalHeader>
            <ModalBody>
              <div style={{ margin: "8px auto" }}>
                <div
                  style={{
                    margin: "2px auto",
                    fontSize: "5em"
                  }}
                >
                  <div>
                    <FontAwesomeIcon
                      icon={
                        this.state.thumb === "true" ? faThumbsUp : faThumbsDown
                      }
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div className="container col-12 d-flex justify-content-center">
                  <div>
                    {" "}
                    <span style={{ color: "#ff6a00" }}>¡Gracias!</span>
                    <p>su solicitud ha sido enviada</p>
                  </div>
                </div>
                <div
                  className="container col-12 d-flex justify-content-center"
                  style={{ marginTop: "30px" }}
                >
                  <p>
                    {" "}
                    Forma parte de nuestra comunidad en instagram y participa en
                    los concursos de{" "}
                    <span style={{ color: "#ff6a00" }}>@comentaygana</span>
                  </p>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="success">seguir!</Button>
              <Button color="secondary" onClick={this.toggleModal.bind(this)}>
                volver
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default ScannedCodeInput;
