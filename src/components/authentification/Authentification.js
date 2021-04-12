import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../authentification/Authentification.css";
import Login from "./login/Login";
import Register from "./register/Register";
import Main from "../main/Main";

export default class Authentification extends Component {
  render() {
    return (
      <Router>
        <div className="Authentification">
          {/* <div className="auth-wrapper">
            <div className="auth-inner"> */}
          <div id="animatedBackground"></div>

          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/main" component={Main} />
          </Switch>
        </div>
        {/* </div>
        </div> */}
      </Router>
    );
  }
}
