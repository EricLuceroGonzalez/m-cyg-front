import React, { Component } from "react";
import "./yesNoBtn.css";
class YesNoBtn extends Component {
  state = {
    isCheckd: this.props.isCheckd
  };

//   isClicked = e => {
//     console.log(`event: ${e.target.value}`);
//     this.setState({ isCheckd: !this.state.isCheckd });
//     console.log(`Is Checked: ${this.state.isCheckd}`);
//   };
  render() {
    return (
          <button
            value={this.props.value}
            className={this.props.isCheckd ? "btn isClicked" : "btn notClicked"}
            onClick={(e) => this.props.clica(e)}
          >
            {this.props.label}
          </button>
    );
  }
}

export default YesNoBtn;
