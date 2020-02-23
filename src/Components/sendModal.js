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
  faCertificate
} from "@fortawesome/free-solid-svg-icons";

class SendModal extends Component {
  state = {};

  renderThumb = () => {
    if (this.props.thumy === "false") {
      return <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>;
    } else {
      return <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>;
    }
  };
  tenderResponseYes = () => {
    return (
      <FontAwesomeIcon
        style={{ color: "green" }}
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
  render() {
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggleThis}
        className="col-11 mr-auto ml-auto mt-5"
      >
        <ModalHeader toggle={this.props.toggleThis}>
          Verifica!{" "}
          <FontAwesomeIcon
            style={{ color: "rgb(1,156,246)" }}
            icon={faCertificate}
          ></FontAwesomeIcon>
        </ModalHeader>
        <ModalBody>
          <div
            className="col-12 ml-auto mr-auto"
            style={{ border: "1px solid red", padding: "20px 0px" }}
          >
            <div className="container col-12 d-flex justify-content-center">
              <div className="col-12">
                <div className="row mt-2" style={{ border: "1px solid gray" }}>
                  <Label className="col-10 text-o-s">{this.props.qA}</Label>
                  <div className="col-2">
                    {this.props.qARes === "true"
                      ? this.tenderResponseYes()
                      : this.tenderResponseNo()}
                  </div>
                </div>
                <div className="row mt-2" style={{ border: "1px solid gray" }}>
                  <Label className="col-10 text-o-s">{this.props.qB}</Label>
                  <div className="col-2">
                    {this.props.qBRes === "true"
                      ? this.tenderResponseYes()
                      : this.tenderResponseNo()}
                  </div>
                </div>
                <div className="row mt-2" style={{ border: "1px solid gray" }}>
                  <Label className="col-10 text-o-s">
                    Volverias a nuestras instalaciones?
                  </Label>
                  <div className="col-2">{this.renderThumb()}</div>
                </div>
                <div className="row mt-2" style={{ border: "1px solid gray" }}>
                  <Label className="text-o-s">Comentario:</Label>
                  <div className="text-title-gray">{this.props.comment}</div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success">Enviar!</Button>
          <Button color="info" onClick={this.props.toggleThis.bind(this)}>
            volver
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default SendModal;
