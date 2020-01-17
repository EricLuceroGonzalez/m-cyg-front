import React, { Component } from "react";
import QrReader from "react-qr-reader";

class codeQrReader extends Component {
  state = {
    result: "No result"
  };
  handleScan = data => {
    if (data) {
      window.location.href = data;
      this.setState({
        result: data
      });
    }
  };
  handleError = err => {
    console.error(err);
    this.setState({
      result: err
    });
  };
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default codeQrReader;
