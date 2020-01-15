import React, { Component } from "react";
import api from "../api/index";
import { Link } from "react-router-dom";

import "../styles/main.css";
import "../styles/jello.css";
import {
  Button,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import thumbUp from "../media/comentaygana-10.png";
import thumbDown from "../media/comentaygana-10upside.png";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { restElement } from "@babel/types";

const formFill = {
  color: "gray",
  fontSize: "0.85em",
  fontFamily: "Montserrat",
  margin: "10px 2px",
  fontWeight: "lighter"
};
class Thumbs extends Component {
  state = {
    email: "default@mail.com",
    stars: "0",
    thumb: "",
    comment: "",
    date: "",
    engage: "",
    activeThumbUp: false,
    activeThumbDown: false,
    formClassName: "",
    modal: false
  };

  // sendData() => Axios.post(0)
  sendFormData = () => {
    console.log("inside sendFormData()");
    console.log(this.state);
    this.setState({ formClassName: "goForm" });

    api
      .postComment(this.state)
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
  noSubmit = () => {
    console.log("shit!");
  };

  toggleModal = e => {
    e.preventDefault();
    if (this.state.formClassName === "goForm") {
      e.preventDefault();
      this.setState({
        modal: false
      });
      this.setState({
        thumb: "",
        comment: "",
        date: "",
        engage: "",
        activeThumbUp: false,
        activeThumbDown: false,
        formClassName: ""
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

  handleUserInput = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`change e = ${e}`);
    console.log(`change name = ${name}`);
    console.log(`change value = ${value}`);
    this.setState({ [name]: value });
    this.setState({ date: this.getCurrentDate() });
    // console.log(this.getCurrentDate());
    console.log(this.state);
  };

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
      <div
        className="limiter"
        style={{
          padding: "10px 12px",
          fontSize: "16px"
        }}
      >
        <div className="container-login100">
          <div
            className={`wrap-login100 p-l-110 p-r-110 p-t-35 p-b-33 ${this.state.formClassName}`}
            style={{ padding: "10px 12px" }}
          >
            <Form
              className="login100-form validate-form flex-sb flex-w"
              onReset={this.resetForm}
            >
              {/**onSubmit={this.handleSubmit.bind(this)} **/}
              <span className="login100-form-titledatos p-b-25">
                {/**<img src={comentaygana02} width="300px" alt="manito"></img> */}
              </span>

              <span className="btn-facedatos">
                Que te parecio tu experiencia?
              </span>

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
              <span className="btn-facedatos ">Haz tu comentario</span>
              <FormGroup>
                <div className="wrap-input100datos mt-4 mb-4">
                  <textarea
                    className="input100"
                    rows="3"
                    onChange={event => this.handleUserInput(event)}
                    style={formFill}
                    type="text"
                    name="comment"
                    id="input-comenta"
                    value={this.state.comment}
                    placeholder="..."
                  ></textarea>
                  <span className="focus-input100"></span>
                </div>
              </FormGroup>
              <div className="container-login100-form-btn m-t-25">
                <Button
                  className="login100-form-btn"
                  onClick={this.sendFormData}
                >
                  Enviar!
                </Button>
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
                          this.state.thumb === "true"
                            ? faThumbsUp
                            : faThumbsDown
                        }
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="container-fluid col-2 d-flex justify-content-center">
                    <div>Comentario:</div>
                    <div>{this.state.comment}</div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Link to={"/comments"}>
                  <Button color="success">seguir!</Button>
                </Link>
                <Button color="secondary" onClick={this.toggleModal.bind(this)}>
                  volver
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Thumbs;
