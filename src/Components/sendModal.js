import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCheckCircle,
  faTimesCircle,
  faCertificate,
  faArrowAltCircleLeft,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import apis from "../api";

const fontType = {
  color: "#ff6a00",
  fontFamily: "Montserrat-BlackItalic"
};
class SendModal extends Component {
  state = { reviewAuth: "" };

  componentDidMount() {
    apis
      .getReviewerAuth(this.props.reviwer)
      .then(res => {
        console.log(res.data);

        this.setState({ reviewAuth: res.data.name.split(" ")[0] });
      })
      .catch(err => console.log(err));
  }

  renderThumb = () => {
    if (this.props.thumy === "false") {
      return (
        <FontAwesomeIcon
          style={{ color: "red" }}
          icon={faThumbsDown}
        ></FontAwesomeIcon>
      );
    } else {
      return (
        <FontAwesomeIcon
          style={{ color: "rgb(40,210,105)" }}
          icon={faThumbsUp}
        ></FontAwesomeIcon>
      );
    }
  };
  tenderResponseYes = () => {
    return (
      <FontAwesomeIcon
        style={{ color: "rgb(40,210,105)" }}
        icon={faCheckCircle}
      ></FontAwesomeIcon>
    );
  };
  tenderResponseNo = () => {
    return (
      <FontAwesomeIcon
        style={{ color: "red" }}
        icon={faTimesCircle}
      ></FontAwesomeIcon>
    );
  };

  renderQuestions = theQuestion => {
    if (
      this.props[theQuestion][0] !== "¿" &&
      this.props[theQuestion][this.props[theQuestion].length - 1] === "?"
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
          {this.props[theQuestion].slice(0, this.props[theQuestion].length - 1)}
          <span style={{ color: "#ff6a00" }}>?</span>
        </Label>
      );
    } else if (
      this.props[theQuestion][0] !== "¿" &&
      this.props[theQuestion][this.props[theQuestion].length - 1] === " " &&
      this.props[theQuestion][this.props[theQuestion].length - 2] === "?"
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
          {this.props[theQuestion].slice(0, this.props[theQuestion].length - 2)}
          <span style={{ color: "#ff6a00" }}>?</span>
        </Label>
      );
    } else if (
      this.props[theQuestion][0] === "¿" &&
      this.props[theQuestion][this.props[theQuestion].length - 1] === "?"
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
          {this.props[theQuestion].slice(1, this.props[theQuestion].length - 2)}
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
          {this.props[theQuestion].slice(0, this.props[theQuestion].length)}
          <span style={{ color: "#ff6a00" }}>?</span>
        </Label>
      );
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggleThis}
        className="col-11 mr-auto ml-auto mt-5"
        style={{ fontSize: "0.75em" }}
      >
        <ModalHeader toggle={this.props.toggleThis}>
          <div
            style={{
              color: "#ff6a00",
              fontFamily: "Montserrat-BlackItalic",
              fontSize: "0.6em"
            }}
          >
            {this.state.reviewAuth}!,
            <div>verifica tu comentario! </div>
          <FontAwesomeIcon
            style={{ color: "rgb(1,156,246)", fontSize: '0.75em' }}
            icon={faCertificate}
          ></FontAwesomeIcon>
          </div>
        </ModalHeader>
        <ModalBody>
          <div
            className="col-12 ml-auto mr-auto"
            style={{ padding: "20px 0px" }}
          >
            <div className="container col-12 d-flex justify-content-center">
              <div className="col-12">
                <div
                  className="row mt-4"
                  style={{
                    backgroundColor: "rgba(245,245,245,0.7)",
                    boxShadow: "4px 4px 3px rgba(196,190,196,0.75)"
                  }}
                >
                  <div className="col-10">{this.renderQuestions("qA")}</div>
                  <div className="col-2">
                    {this.props.qARes === "true"
                      ? this.tenderResponseYes()
                      : this.tenderResponseNo()}
                  </div>
                </div>
                <div
                  className="row mt-4"
                  style={{
                    backgroundColor: "rgba(245,245,245,0.7)",
                    boxShadow: "4px 4px 3px rgba(196,190,196,0.75)"
                  }}
                >
                  <div className="col-10">{this.renderQuestions("qB")}</div>
                  <div className="col-2">
                    {this.props.qBRes === "true"
                      ? this.tenderResponseYes()
                      : this.tenderResponseNo()}
                  </div>
                </div>
                <div
                  className="row mt-4"
                  style={{
                    backgroundColor: "rgba(245,245,245,0.7)",
                    boxShadow: "4px 4px 3px rgba(196,190,196,0.75)"
                  }}
                >
                  <div className="col-10">
                    <Label
                      style={{
                        margin: "0px auto",
                        textAlign: "center",
                        fontSize: "0.85em"
                      }}
                      className="text-question"
                    >
                      <span style={{ color: "#ff6a00" }}>¿</span>
                      Volverias a nuestras instalaciones?
                      <span style={{ color: "#ff6a00" }}>?</span>
                    </Label>
                  </div>

                  <div className="col-2">{this.renderThumb()}</div>
                </div>
                <div
                  className="mt-4 col-12"
                  style={{
                    backgroundColor: "rgba(245,245,245,0.7)",
                    boxShadow: "4px 4px 3px rgba(196,190,196,0.75)"
                  }}
                >
                  <Label className="text-o-s">Comentario:</Label>
                  <div className="col-12 text-title-gray mt-2">
                    {this.props.comment}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            style={fontType}
            color="btn btn-outline-success"
            onClick={() => this.props.sendClick()}
          >
            Enviar!{" "}
            <FontAwesomeIcon
              style={{ color: "rgb(1,156,246)" }}
              icon={faPaperPlane}
            ></FontAwesomeIcon>
          </Button>
          <Button
            style={fontType}
            color="btn btn-outline-info"
            onClick={this.props.toggleThis.bind(this)}
          >
            Volver{" "}
            <FontAwesomeIcon
              style={{ color: "rgb(1,156,246)" }}
              icon={faArrowAltCircleLeft}
            ></FontAwesomeIcon>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default SendModal;
