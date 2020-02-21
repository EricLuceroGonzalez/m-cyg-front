import React, { Component } from "react";
import { Label, Input } from "reactstrap";

class CheckItem extends Component {
  state = { text: this.props.text, chkbox: this.props.checke };

  checkBoxToggle = e => {
    console.log(e.target.checked);
    this.setState({chkbox: !this.state.chkbox})
    console.log(this.state.chkbox);
  };
  render() {
    return (
      <div className="page mt-2 mb-2">
        <div className="page__toggle">
          <Label className="toggle">
            <Input
              className="toggle__input"
              type="checkbox"
              checked={this.props.checke} 
              onChange={this.props.onChange}
            />
            <span className="toggle__label">
              <span
                className="toggle__text"
                style={{
                  fontSize: "14px",
                  padding: "2px 10px"
                }}
              >
                {this.state.text}
              </span>
            </span>
          </Label>
        </div>
      </div>
    );
  }
}

export default CheckItem;
