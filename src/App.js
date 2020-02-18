import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Components/NavBarCollapse";

import ScannedCodeCheck from "./Components/scannedCodeCheks";
import ScannedCodeInput from "./Components/scannedCodeInput";
import ActivateQr from "./Components/activateQr";
import Thumbs from "./Components/Thumbs";
import scannedError from "./Components/scannedError";
import scannedPrice from "./Components/scannedPrice";
import terminosYCond from "./Components/terminosYCond";
import Win from "./Components/win";
import ContactInfo from "./Components/ContactInfo";
import QrReader from "./Components/qrReader";

function App() {
  return (
    <Router>
      <Nav></Nav>
{/**      <Route exact path="/" component={ScannedCodeCheck} /> 
      <Route exact path="/details/:id" render={(props) => <ScannedCodeCheck globalStore={globalStore} {...props} /> } />
    */}
      <Route exact path="/:id" component={ScannedCodeCheck} />
      <Route path="/aComment" component={Thumbs} />
      <Route path="/scanned" component={ScannedCodeCheck} />
      <Route path="/scanned1" component={ScannedCodeInput} />
      <Route path="/activate" component={ActivateQr} />
      <Route path="/terminos" component={terminosYCond} />
      <Route path="/checkPrice" component={scannedPrice} />
      <Route path="/checkError" component={scannedError} />
      <Route path="/Win" component={Win} />
      <Route path="/contact" component={ContactInfo} />
      <Route path="/ActivateCamera" component={QrReader} />
    </Router>
  );
}

export default App;
