import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import classnames from "classnames";
import Phone from "react-phone-number-input";
import "react-phone-number-input/style.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

const formBg = {
  background: "white",
  borderRadius: "18px",
  boxShadow: "4px 5px 4px gray"
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
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      phoneNumber: "",
      birthdate: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      phoneNumber: this.state.phoneNumber,
      birthdate: this.state.birthdate
    };
    this.props.registerUser(newUser, this.props.history);
    console.log(newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-10 col-md-8 col-lg-6 mr-auto ml-auto"
            style={formBg}
          >
            <div
              className="col-12 mr-auto ml-auto"
              style={{ textAlign: "center" }}
            >
              <h4>
                <b>Registro</b>
              </h4>
              <p className="grey-text text-darken-1">
                Ya tiene una cuenta?
                <Link to="/login" className="text-light-orange">
                  {" "}
                  Loggeate
                </Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="col-12 mr-auto ml-auto">
                <input
                  style={inputSty}
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label style={labelSty} htmlFor="name">
                  Nombre
                </label>
                <span className="red-text">{errors.name}</span>
                <input
                  style={inputSty}
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label style={labelSty} htmlFor="email">
                  Email
                </label>
                <span className="red-text">{errors.email}</span>
                <input
                  style={inputSty}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label style={labelSty} htmlFor="password">
                  Password
                </label>
                <span className="red-text">{errors.password}</span>
                <input
                  style={inputSty}
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label style={labelSty} htmlFor="password2">
                  Confirmar Password
                </label>
                <span className="red-text">{errors.password2}</span>
                <span className="red-text">{errors.phoneNumber}</span>
                <div className="col-12" style={inputSty}>
                  <Phone
                    countrySelectProps={{ unicodeFlags: true }}
                    defaultCountry={"PA"}
                    value={this.state.phone}
                    onChange={phone => this.setState({ phoneNumber: phone })}
                    // placeholder="Enter phone number"
                  ></Phone>
                </div>
                <label style={labelSty} htmlFor="birthdate">
                  Telefono
                </label>

                <input
                  style={inputSty}
                  onChange={this.onChange}
                  placeholder="YYYY/MM/DD"
                  // value={this.state.birthdate}
                  error={errors.birthdate}
                  id="birthdate"
                  type="date"
                  min="1940-01-01"
                  max="2012-01-01"
                  value={
                    this.state.birthdate === ""
                      ? "2010-01-01"
                      : this.state.birthdate
                  }
                  className={classnames("", {
                    invalid: errors.birthdate
                  })}
                />
                <label style={labelSty} htmlFor="birthdate">
                  Fecha de nacimiento
                </label>
                <span className="red-text">{errors.birthdate}</span>
              </div>
              <div className="container-login100-form-btn m-t-25 col-8 mr-auto ml-auto">
                <Button
                  className="login100-form-btn text-title-white"
                  style={{
                    // borderRadius: "23px",
                    letterSpacing: "1.5px",
                    margin: "2rem 0px",
                    fontSize: "0.85em"
                  }}
                  onClick={() => {
                    console.log(this.state);
                  }}
                  //   type="submit"
                >
                  Crear cuenta
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
