import React, { Component } from "react";
import { Label, Input } from "reactstrap";

class CheckItem extends Component {
  state = { text: this.props.text };
  render() {
    return (
      <div className="page mt-2 mb-2">
        <div className="page__toggle">
          <Label className="toggle">
            <Input
              className="toggle__input"
              type="checkbox"
              //   onClick={event => this.checkBoxToggle(event)}
            />
            <span className="toggle__label">
              <span
                className="toggle__text"
                style={{
                  fontSize: "14px",
                  padding: "2px 10px"
                }}
              >
                {this.state.text    }
              </span>
            </span>
          </Label>
        </div>
      </div>
    );
  }
}

export default CheckItem;
