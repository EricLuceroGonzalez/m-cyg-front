import React, { Component } from "react";
import { CardImg, Form, Button, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import qrScanned from "../media/logo00.png";
import CheckItem from "./CheckItem";
import apis from "../api";

const formBg = {
  backgroundColor: "white",
  padding: "10px 15px",
  borderRadius: "16px"
};

class ScannedCodeCheck extends Component {
  state = {
    lists: "",
    formClassName: "",
    coupons: "",
    questionA: "",
    questionB: ""
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
    this.state.receivePromos
      ? this.setState({ receivePromos: false })
      : this.setState({ receivePromos: true });

    console.log(this.state.receivePromos);
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
  //   errorClass(error) {
  //     return error.length === 0 ? "" : "has-error";
  //   }
  render() {
    return (
      <div
        className={`col-xs-10 col-md-10 col-sm-10 col-lg-8 mt-4 ml-auto mr-auto ${this.state.formClassName}`}
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
              <p>id: {this.props.match.params.id}</p>
            </h3>
          </div>

          <FormGroup check className="p-2">
            <div className="row">
              <CheckItem text={"Si"}></CheckItem>
              <CheckItem text={"No"}></CheckItem>
            </div>
          </FormGroup>

          <div className="mt-5 mb-3 text-question">
            <h3 style={{ fontSize: "1.45em", textAlign: "center" }}>
              {this.state.coupons.questionB}
            </h3>
          </div>

          <FormGroup check className="p-2">
            <div className="row">
              <CheckItem text={"Si"}></CheckItem>
              <CheckItem text={"No"}></CheckItem>
            </div>
          </FormGroup>

          <div className="container-login100-form-btn mt-5">
            <Link
              to={"/scanned1"}
              className="login100-form-btn text-title-white
            "
            >
              <Button
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                  border: "0px solid rgba(0,0,0,0)"
                }}
              >
                Siguiente
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default ScannedCodeCheck;
