import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
// import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import TermCondText from "./terminosYCond-content";

class TerminosCondiciones extends Component {
  state = {
    formClassName: "",
    modal: this.props.modal,
    toggle: this.props.toggle
  };

  render() {
    return (
      <Modal
        // isOpen={this.state.modal} toggle={this.state.toggle}
        show={this.state.modal}
      >
        <ModalHeader>Comentario enviado!</ModalHeader>
        <ModalBody>
          <div style={{ margin: "8px auto" }}>
            <div
              style={{
                margin: "2px auto",
                fontSize: "5em"
              }}
            >
              <div></div>
            </div>
            <div
              className="container col-12 d-flex justify-content-center"
              style={{ marginTop: "30px" }}
            >
              <p>
                {" "}
                Forma parte de nuestra comunidad en instagram y participa en los
                concursos de{" "}
                <span style={{ color: "#ff6a00" }}>@comentaygana</span>
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success">seguir!</Button>
          <Link to={"terminos"}>
            <Button
              color="secondary"
              // onClick={this.toggleModal.bind(this)}
            >
              volver
            </Button>
          </Link>
        </ModalFooter>
      </Modal>
    );
  }
}

export default TerminosCondiciones;
