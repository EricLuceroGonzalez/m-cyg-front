import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import "./yesNoBtn.css";
class YesNoBtn extends Component {
  state = {};

  renderCheckIconY() {
    if (this.props.defaultCheck === "true") {
      return (
        <FontAwesomeIcon
          className="ml-2"
          style={{ color: "rgb(40,210,105)", fontSize: '0.8em' }}
          icon={faCheckCircle}
        ></FontAwesomeIcon>
      );
    } else {
      return " ";
    }
  }
  renderCheckIconN() {
    if (this.props.defaultCheck === "false") {
      return (
        <FontAwesomeIcon
          style={{ color: "rgb(40,210,105)", fontSize: '0.8em' }}
          className="ml-1"
          icon={faCheckCircle}
        ></FontAwesomeIcon>
      );
    } else {
      return " ";
    }
  }
  render() {
    return (
      <div className="col-12 ml-auto mr-auto">
        <ButtonGroup className="col-12 ml-auto mr-auto mb-4">
          <Button
            value={true}
            onClick={e => this.props.wasClick(e)}
            className={`mt-1 col-4   ${
              this.state.qACheck ? "isClicked" : "notClicked"
            }`}
          >
            SI{this.renderCheckIconY()}
          </Button>
          <div className="col-2 ml-auto mr-auto"> </div>
          <Button
            value={false}
            onClick={e => this.props.wasClick(e)}
            // className={btn_sel}
            className={`mt-1 col-4 ${
              this.state.qACheck ? "isClicked" : "notClicked"
            }`}
          >
            No{this.renderCheckIconN()}
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default YesNoBtn;
