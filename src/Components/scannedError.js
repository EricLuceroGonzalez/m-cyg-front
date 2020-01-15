import React, { Component } from "react";
import {
  CardImg,
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "reactstrap";
import qrScanned from "../media/Comentaygana-14.png";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const formBg = {
  backgroundColor: "white",
  padding: "10px 15px",
  borderRadius: "16px"
};

class PriceError extends Component {
  state = {};

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
          <div className="col-6 mt-4 ml-auto mr-auto">
            <CardImg
              style={{ transform: "rotate(180deg)" }}
              alt="Card image cap....."
              width="40%"
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
                className="text-b"
              >
                <p>
                  Parece que el codigo ha sido desactivado. Por favor contacta
                  al personal responsable del local comercial o establecimiento.
                  Juntos hacemos de
                  <span style={{ color: "#ff6a00" }}> comentaygana.com </span>
                  un lugar mejor
                </p>
                <p>
                  para reportar algun otro inconveniente envie un correo
                  electronico a
                  <span style={{ color: "#ff6a00" }}>
                    {" "}
                    reporta@comentaygana.com{" "}
                  </span>
                </p>
              </Label>
            </div>

            {/* <Button onClick={this.state.sendTeamData}>Submit</Button> */}
            <div className="container-login100-form-btn m-t-25">
              <Button
                className="login100-form-btn  text-title-white"
                style={{ textTransform: "uppercase", background: "#ff6a00" }}
                onClick={this.sendFormData}
              >
                Codigo desactivado
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

export default PriceError;
