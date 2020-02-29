import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Button } from "reactstrap";

const formBg = {
  background: "rgba(250,250,250,1)",
  borderRadius: "18px",
  boxShadow: "4px 5px 4px gray",
  padding: "20px 12px"
};

const inputSty = {
  outline: "none",
  display: "block",
  background: "rgba(220,220,220, 0.75)",
  margin: "7px auto",
  width: "100%",
  border: "0",
  borderRadius: "8px",
  padding: "5px 7px",
  color: "gray",
  fontFamily: "Montserrat-BlackItalic",
  fontSize: "inherit",
  fontWeight: "500",
  lineHeight: "inherit",
  transition: "0.3s ease"
};

const labelSty = {
  display: "block",
  margin: "0 0 10px",
  color: "gray",
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "1",
  textTransform: "uppercase",
  letterSpacing: ".2em"
};
class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
      }
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div
            className="col-10 col-md-8 col-lg-6 mr-auto ml-auto"
            style={formBg}
          >
            <div
              className="col-12 mr-auto ml-auto mb-5"
              style={{ textAlign: "center" }}
            >
              <h4>
                <b>Login</b>
              </h4>
              <div className="grey-text text-darken-1">
                No tienes una cuenta?{" "}
                <p>
                  <Link className="text-light-orange" to="/register">
                    Registrate gratis!
                  </Link>
                </p>
              </div>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col-12 mr-auto ml-auto">
                <input
                  style={inputSty}
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label style={labelSty} htmlFor="email">
                  Email
                </label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col-12 mr-auto ml-auto">
                <input
                  style={inputSty}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label style={labelSty} htmlFor="password">
                  Password
                </label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="container-login100-form-btn m-t-25 col-5 mr-auto ml-auto">
                <Button
                  className="login100-form-btn text-title-white"
                  style={{
                    borderRadius: "18px",
                    letterSpacing: "1.25px",
                    marginTop: "2rem",
                    fontSize: "0.85em"
                  }}
                  type="submit"
                >
                  Entrar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
