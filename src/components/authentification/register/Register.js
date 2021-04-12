import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
import { Link, Route, Switch, withRouter } from "react-router-dom";

import diamond_login from "../images/diamond.png";
import Login from "../login/Login";
import "./Register.css";

export default class Register extends Component {
  render() {
    const Submit = withRouter(({ history }) => (
      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={() => {
          history.push("/main");
        }}
      >
        Sign Up
      </button>
    ));
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            {/* <div id="animatedBackground"></div> */}

            <h3>Sign Up</h3>

            <div className="form-group">
              <div className="form-image">
                <img src={diamond_login} width="80" height="80" />
              </div>
            </div>

            <div className="wrapper-grid">
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group">
                <label>Re-type Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-type Password"
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Website</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Enter website URL"
                />
              </div>
            </div>

            <div className="buttons-grid">
              <Link to={"/sign-in"}>
                <button type="button" className="btn btn-primary btn-block">
                  Back
                </button>
              </Link>

              <Submit />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
