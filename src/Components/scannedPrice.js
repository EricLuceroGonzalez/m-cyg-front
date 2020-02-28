import React, { Component } from "react";
import apis from "../api/index";
import {
  CardImg,
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label
} from "reactstrap";
import qrScanned from "../media/Comentaygana-01.png";
// import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/main.css";
import LoadingPage from "./LoadingPage";
import theLogo from "../media/logo00.png";

const formBg = {
  backgroundColor: "rgba(222,222,222,0.35)",
  padding: "30px 15px",
  height: "99vh"
};

const code = {
  backgroundColor: "rgba(222,222,222,0.75)",
  color: "#ff6a00",
  padding: "4px 7px",
  margin: "0px 7px",
  textTransform: "uppercase",
  fontFamily: "Montserrat-ExtraBold"
};

const cargo = 0.11;

class PriceGood extends Component {
  state = { coupons: "", product: "", modal: false };

  componentDidMount() {
    // console.log(
    //   `this.props.idCoup: ${this.props.idCoup.location.state.idCoup}`
    // );

    // .getCoupon(this.props.idCoup.location.state.idCoup)
    // .getCoupon(this.props.match.params.id)

    apis
      .getCoupon(this.props.idCoup.location.state.idCoup)
      .then(res => {
        console.log(res.data);
        console.log(res.data.product);
        this.setState({ coupons: res.data, product: res.data.product });
      })
      .catch(err => `Get coupons for price: ${err}`);
  }
  handleIconClick = e => {
    e.preventDefault();
    this.setState({
      activeThumbUp: !this.state.activeThumbUp
    });
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
    this.setState({
      modal: !this.state.modal
    });
  };

  renderOfferCode() {
    const lastFour = this.state.coupons._id.slice(-4);
    const lastEight = this.state.coupons._id.slice(-8, -4);

    return (
      <div
        className="col-12 mr-auto ml-auto"
        style={{ textAlign: "center", margin: "16px auto" }}
      >
        <span style={code}>{lastEight}</span>
        <span>-</span>
        <span style={code}>{lastFour}</span>
      </div>
    );
  }

  renderDiscount() {
    if (this.state.coupons === []) {
      console.log(this.state);
      return "";
    } else {
      console.log(this.state.product.discount);
      return (
        <span className="text-title-orange">
          {this.state.product.discount}%
        </span>
      );
    }
  }
  renderTotal = () => {
    if (this.state.coupons === []) {
      console.log(this.state);
      return "";
    } else {
      return (
        <span className="text-title-orange">
          {(
            this.state.product.priceFinal +
            this.state.product.priceOriginal * 0.07 +
            cargo
          ).toFixed(2)}
        </span>
      );
    }
  };

  render() {
    if (this.state.coupons === "") {
      return <LoadingPage></LoadingPage>;
    } else {
      return (
        <React.Fragment>
          <div
            className={
              "col-xs-8 col-md-10 col-sm-8 col-lg-8 col-12 ml-auto mr-auto"
            }
            style={formBg}
          >
            <div style={{ transform: "rotate(-4deg)", textAlign: "center" }}>
              <h1 style={{ fontSize: "5em" }} className="text-title-blue">
                ¡Woow!
              </h1>
              <h2 className="text-title-orange">FE-LI-CI-DA-DES</h2>
            </div>

            <div className="col-6 mt-4 ml-auto mr-auto">
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
                  Ganaste un {this.renderDiscount()} de descuento
                </Label>
              </div>

              {/* <Button onClick={this.state.sendTeamData}>Submit</Button> */}
              <div className="container-login100-form-btn m-t-25">
                <Button
                  className="login100-form-btn text-title-white"
                  style={{ textTransform: "uppercase", background: "#ff6a00" }}
                  onClick={this.toggleModal}
                >
                  Premio
                </Button>
              </div>
            </Form>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              style={{ height: "75vh" }}
            >
              <ModalHeader
                toggle={this.toggleModal}
                style={{
                  backgroundColor: "#ff6a00",
                  color: "white",
                  fontFamily: "Montserrat-BlackItalic"
                }}
              >
                Detalles del cupon:
              </ModalHeader>
              {this.renderOfferCode()}
              <div className="col-6 ml-auto mr-auto">
                <CardImg
                  alt="Card image cap....."
                  width="65%"
                  src={theLogo}
                ></CardImg>
              </div>
              <ModalBody>
                <div
                  style={{ border: "4px solid #ff6a00", borderRadius: "12px" }}
                >
                  <div
                    style={{ margin: "0px auto", textAlign: "center" }}
                    className="text-question"
                  >
                    {this.renderDiscount()} de descuento
                    <div>
                      <p className="text-b">{this.state.product.name}</p>
                      <p className="text-b">{this.state.product.description}</p>
                    </div>
                    <div className="mt-4 row justify-content-start">
                      <p className="col-8 showPremio">Precio:</p>{" "}
                      <span>${this.state.product.priceOriginal}</span>
                      <p className="col-8 showPremio">Descuento:</p>{" "}
                      <span>${this.state.product.cost}</span>
                      <p className="col-8 showPremio">
                        Cargo por servicio:
                      </p>{" "}
                      <span>${cargo}</span>
                      <p className="col-8 showPremio">Impuestos:</p>{" "}
                      <span>
                        ${(this.state.product.priceOriginal * 0.07).toFixed(2)}
                      </span>
                      <p className=" col-8 showPremio">Total a pagar:</p>{" "}
                      <span>${this.renderTotal()}</span>
                    </div>
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
}

export default PriceGood;
