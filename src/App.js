import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ScannedCodeInput from "./Components/scannedCodeInput";
import ActivateQr from "./Components/activateQr";
import Thumbs from "./Components/Thumbs";
// import scannedPrice from "./Components/scannedPrice";
import terminosYCond from "./Components/terminosYCond";
// import Win from "./Components/win";
import ContactInfo from "./Components/ContactInfo";
// import QrReader from "./Components/qrReader";
import Home from "./Components/HomeComponent";
// Auth Components
import ScannedCodeCheck from "./Components/dashboard/scannedCodeCheks";
import scannedError from "./Components/dashboard/scannedError";
import PriceGood from "./Components/dashboard/scannedPrice";
// For the auth and session
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/dashboard/Dashboard";
import Register from "./auth/Register";
import Login from "./auth/Login";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded)); // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser()); // Redirect to login
    window.location.href = "./login";
  }
}

// 5e4b35cd121e0c1a1bc620df
// 5e4c77c255d928001732d1d5
// 5e4cd14fef193600170f0f8f
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/aComment" component={Thumbs} />
        <Route path="/scanned" component={ScannedCodeCheck} />
        <Route path="/scanned1" component={ScannedCodeInput} />
        <Route path="/activate" component={ActivateQr} />
        <Route path="/terminos" component={terminosYCond} />
        {/*      <Route path="/checkPrice/:id" component={PriceGood} />*/}
        <Route path="/contact" component={ContactInfo} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/gana/:id" component={ScannedCodeCheck} />
          <PrivateRoute
            path="/checkPrice"
            component={theId => <PriceGood idCoup={theId}></PriceGood>}
          />
          <PrivateRoute path="/checkError" component={scannedError} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
