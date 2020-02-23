import React, { Component } from "react";
import { Label, CardImg, Form, Button, FormGroup } from "reactstrap";
// import { Link } from "react-router-dom";
import qrScanned from "../media/logo00.png";
import apis from "../api";
import thumbUp from "../media/comentaygana-10.png";
import thumbDown from "../media/comentaygana-10upside.png";
import "./yesNoBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import YesNoBtn from "./NoBtn";
import SendModal from "./sendModal";
import LoadingPage from "./LoadingPage";
import cogoToast from "cogo-toast";

const formBg = {
  backgroundColor: "rgba(222,222,222,0.35)",
  padding: "10px 15px",
  borderRadius: "16px"
};

const formFill = {
  color: "gray",
  fontSize: "0.85em",
  fontFamily: "Montserrat-SemiBold",
  margin: "10px 2px"
};

class ScannedCodeCheck extends Component {
  state = {
    lists: "",
    formClassName: "",
    coupons: [],
    qACheck: "",
    qBCheck: "",
    thumb: "",
    comment: "",
    defaultCheckA: "",
    defaultCheckB: "",
    isCheckd: "",
    defaultCheck: "",
    modal: false
  };

  componentDidMount() {
    // console.log(`The id props: ${this.props.match.params.id}`);
    apis
      .getCoupon(this.props.match.params.id)
      .then(res => {
        this.setState({ coupons: res.data, questionA: res.data.questionA });
      })
      .catch(err => console.log(err));
  }

  sendData = () => {
    console.log("\n\n\n\n\n inside sendFormData()");
    console.log(this.state);
    apis
      .postCouponComment({
        comment: this.state.comment,
        qAcheck: this.state.qACheck,
        qBcheck: this.state.qBCheck,
        thumb: this.state.thumb,
        couponId: this.state.coupons._id
      })
      .then(res => {
        console.log(res);
        this.props.history.push("/checkPrice");
      })
      .catch(err => {
        this.props.history.push("/checkError");
        console.log(this.state);
        console.log(err);
      });
  };

  checkBoxToggle = e => {
    console.log(`qACheck: ${e.target.value}`);
    // console.log(e.target);
    this.setState({
      qACheck: e.target.value,
      defaultCheckA: e.target.value
    });
  };

  siguienteButton = () => {
    console.log(this.state);
  };

  checkBoxToggleB = e => {
    console.log(`qBCheck: ${e.target.value}`);
    this.setState({
      qBCheck: e.target.value,
      defaultCheckB: e.target.value
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

  toggleModal = () => {
    if (
      this.state.qACheck === "" &&
      this.state.qBCheck === "" &&
      this.state.thumb === ""
    ) {
      cogoToast.warn(
        <div>
          <div style={{ height: "30vh" }}>
            <b>Espera!</b>
            <div
              className="col-12"
              style={{
                fontSize: "3em",
                color: "rgb(50,103,205)",
                textAlign: "center"
              }}
            >
              <FontAwesomeIcon icon={faPuzzlePiece}></FontAwesomeIcon>
            </div>
            <div>Te falta responder las preguntas:</div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              {this.renderQuestions("questionA")}
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              {this.renderQuestions("questionB")}
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              <Label
                style={{
                  margin: "0px auto",
                  textAlign: "center",
                  fontSize: "0.85em"
                }}
                className="text-question"
              >
                <span style={{ color: "#ff6a00" }}>¿</span>
                Volverias a nuestras instalaciones
                <span style={{ color: "#ff6a00" }}>?</span>
              </Label>
            </div>
          </div>
        </div>
      );
    } else if (
      this.state.qACheck === "" &&
      this.state.qBCheck !== "" &&
      this.state.thumb === ""
    ) {
      cogoToast.warn(
        <div>
          <div style={{ height: "30vh" }}>
            <b>Espera!</b>
            <div
              className="col-12"
              style={{
                fontSize: "3em",
                color: "rgb(50,103,205)",
                textAlign: "center"
              }}
            >
              <FontAwesomeIcon icon={faPuzzlePiece}></FontAwesomeIcon>
            </div>
            <div>Te falta responder las preguntas:</div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              {this.renderQuestions("questionA")}
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              <Label
                style={{
                  margin: "0px auto",
                  textAlign: "center",
                  fontSize: "0.85em"
                }}
                className="text-question"
              >
                <span style={{ color: "#ff6a00" }}>¿</span>
                Volverias a nuestras instalaciones
                <span style={{ color: "#ff6a00" }}>?</span>
              </Label>
            </div>
          </div>
        </div>
      );
    } else if (
      this.state.qACheck !== "" &&
      this.state.qBCheck === "" &&
      this.state.thumb === ""
    ) {
      cogoToast.warn(
        <div>
          <div style={{ height: "30vh" }}>
            <b>Espera!</b>
            <div
              className="col-12"
              style={{
                fontSize: "3em",
                color: "rgb(50,103,205)",
                textAlign: "center"
              }}
            >
              <FontAwesomeIcon icon={faPuzzlePiece}></FontAwesomeIcon>
            </div>
            <div>Te falta responder las preguntas:</div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              {this.renderQuestions("questionB")}
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              <Label
                style={{
                  margin: "0px auto",
                  textAlign: "center",
                  fontSize: "0.85em"
                }}
                className="text-question"
              >
                <span style={{ color: "#ff6a00" }}>¿</span>
                Volverias a nuestras instalaciones
                <span style={{ color: "#ff6a00" }}>?</span>
              </Label>
            </div>
          </div>
        </div>
      );
    } else if (
      this.state.qACheck === "" &&
      this.state.qBCheck === "" &&
      this.state.thumb !== ""
    ) {
      cogoToast.warn(
        <div>
          <div style={{ height: "30vh" }}>
            <b>Espera!</b>
            <div
              className="col-12"
              style={{
                fontSize: "3em",
                color: "rgb(50,103,205)",
                textAlign: "center"
              }}
            >
              <FontAwesomeIcon icon={faPuzzlePiece}></FontAwesomeIcon>
            </div>
            <div>Te falta responder las preguntas:</div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              {this.renderQuestions("questionA")}
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              {this.renderQuestions("questionB")}
            </div>
          </div>
        </div>
      );
    } else if (
      this.state.qACheck === "" &&
      this.state.qBCheck !== "" &&
      this.state.thumb !== ""
    ) {
      cogoToast.warn(
        <div>
          <div style={{ height: "30vh" }}>
            <b>Espera!</b>
            <div
              className="col-12"
              style={{
                fontSize: "3em",
                color: "rgb(50,103,205)",
                textAlign: "center"
              }}
            >
              <FontAwesomeIcon icon={faPuzzlePiece}></FontAwesomeIcon>
            </div>
            <div>Te falta responder las preguntas:</div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              {this.renderQuestions("questionA")}
            </div>
          </div>
        </div>
      );
    } else if (
      this.state.qACheck !== "" &&
      this.state.qBCheck === "" &&
      this.state.thumb !== ""
    ) {
      cogoToast.warn(
        <div>
          <div style={{ height: "30vh" }}>
            <b>Espera!</b>
            <div
              className="col-12"
              style={{
                fontSize: "3em",
                color: "rgb(50,103,205)",
                textAlign: "center"
              }}
            >
              <FontAwesomeIcon icon={faPuzzlePiece}></FontAwesomeIcon>
            </div>
            <div>Te falta responder las preguntas:</div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              {this.renderQuestions("questionB")}
            </div>
          </div>
        </div>
      );
    } else if (
      this.state.qACheck !== "" &&
      this.state.qBCheck !== "" &&
      this.state.thumb === ""
    ) {
      cogoToast.warn(
        <div>
          <div style={{ height: "30vh" }}>
            <b>Espera!</b>
            <div
              className="col-12"
              style={{
                fontSize: "3em",
                color: "rgb(50,103,205)",
                textAlign: "center"
              }}
            >
              <FontAwesomeIcon icon={faPuzzlePiece}></FontAwesomeIcon>
            </div>
            <div>Te falta responder las preguntas:</div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(244,245,20,0.5)"
              }}
            >
              <Label
                style={{
                  margin: "0px auto",
                  textAlign: "center",
                  fontSize: "0.85em"
                }}
                className="text-question"
              >
                <span style={{ color: "#ff6a00" }}>¿</span>
                Volverias a nuestras instalaciones
                <span style={{ color: "#ff6a00" }}>?</span>
              </Label>
            </div>
          </div>
        </div>
      );
    } else {
      this.setState({
        modal: !this.state.modal
      });
    }
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
  isClicked = e => {
    console.log(`event: ${e.target.value}`);
    this.setState({
      isCheckd: !this.state.isCheckd,
      qACheck: !this.state.qACheck
    });
    console.log(`Is Checked: ${this.state.isCheckd}`);
  };
  // ¿?
  renderQuestions = theQuestion => {

    if (
      this.state.coupons[theQuestion][0] !== "¿" &&
      this.state.coupons[theQuestion][
        this.state.coupons[theQuestion].length - 1
      ] === "?"
    ) {
      return (
        <Label
          style={{
            margin: "0px auto",
            textAlign: "center",
            fontSize: "0.85em"
          }}
          className="text-question"
        >
          <span style={{ color: "#ff6a00" }}>¿</span>
          {this.state.coupons[theQuestion].slice(
            0,
            this.state.coupons[theQuestion].length - 1
          )}
          <span style={{ color: "#ff6a00" }}>?</span>
        </Label>
      );
    } else if (
      this.state.coupons[theQuestion][0] !== "¿" &&
      this.state.coupons[theQuestion][
        this.state.coupons[theQuestion].length - 1
      ] === " " &&
      this.state.coupons[theQuestion][
        this.state.coupons[theQuestion].length - 2
      ] === "?"
    ) {
      return (
        <Label
          style={{
            margin: "0px auto",
            textAlign: "center",
            fontSize: "0.85em"
          }}
          className="text-question"
        >
          <span style={{ color: "#ff6a00" }}>¿</span>
          {this.state.coupons[theQuestion].slice(
            0,
            this.state.coupons[theQuestion].length - 2
          )}
          <span style={{ color: "#ff6a00" }}>?</span>
        </Label>
      );
    } else if (
      this.state.coupons[theQuestion][0] === "¿" &&
      this.state.coupons[theQuestion][
        this.state.coupons[theQuestion].length - 1
      ] === "?"
    ) {
      return (
        <Label
          style={{
            margin: "0px auto",
            textAlign: "center",
            fontSize: "0.85em"
          }}
          className="text-question"
        >
          <span style={{ color: "#ff6a00" }}>¿</span>
          {this.state.coupons[theQuestion].slice(
            1,
            this.state.coupons[theQuestion].length - 2
          )}
          <span style={{ color: "#ff6a00" }}>?</span>
        </Label>
      );
    } else {
      return (
        <Label
          style={{
            margin: "0px auto",
            textAlign: "center",
            fontSize: "0.85em"
          }}
          className="text-question"
        >
          <span style={{ color: "#ff6a00" }}>¿</span>
          {this.state.coupons[theQuestion].slice(
            0,
            this.state.coupons[theQuestion].length
          )}
          <span style={{ color: "#ff6a00" }}>?</span>
        </Label>
      );
    }
  };
  render() {
    if (this.state.coupons.length === 0) {
      return <LoadingPage></LoadingPage>;
    } else {
      return (
        <div
          className={`col-12 col-sm-10 col-md-8 col-lg-8 ml-auto mr-auto ${this.state.formClassName}`}
          style={formBg}
        >
          <div className="col-5 mt-4 ml-auto mr-auto">
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
              {this.renderQuestions("questionA")}
            </div>
            <YesNoBtn
              defaultCheck={this.state.defaultCheckA}
              wasClick={this.checkBoxToggle}
            ></YesNoBtn>

            <div className="mt-5 mb-3 text-question">
              {this.renderQuestions("questionB")}
            </div>
            <YesNoBtn
              defaultCheck={this.state.defaultCheckB}
              wasClick={this.checkBoxToggleB}
            ></YesNoBtn>

            <div className="justify-content-center mt-5">
              <Label
                style={{
                  margin: "0px auto",
                  textAlign: "center",
                  fontSize: "0.85em"
                }}
                className="text-question"
              >
                <span style={{ color: "#ff6a00" }}>¿</span>
                Volverias a nuestras instalaciones
                <span style={{ color: "#ff6a00" }}>?</span>
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
                  <div className=" text-title-orange">
                    Comparte tu experiencia
                  </div>
                  <div className=" text-title-orange">
                    Dejanos un comentario
                  </div>
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
              <Button onClick={this.toggleModal}>Siguiente..</Button>
              <SendModal
                modal={this.state.modal}
                toggleThis={this.toggleModal}
                couponInfo={this.state.coupons}
                qA={this.state.coupons.questionA}
                qARes={this.state.qACheck}
                qBRes={this.state.qBCheck}
                qB={this.state.coupons.questionB}
                thumy={this.state.thumb}
                comment={this.state.comment}
                sendClick={this.sendData}
              ></SendModal>
            </div>
          </Form>
        </div>
      );
    }
  }
}

export default ScannedCodeCheck;
