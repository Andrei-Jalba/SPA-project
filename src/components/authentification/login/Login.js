import React, { Component } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import diamond_login from "../images/diamond.png";
import "./Login.css";
import Main from "../../main/Main";

export default class Login extends Component {
  render() {
    const Submit = withRouter(({ history }) => (
      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={() => {
          history.push("/main");
        }}
      >
        Submit
      </button>
    ));
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form className="login-form">
            {/* <div id="animatedBackground"></div> */}

            <h3>Sign In</h3>
            <div className="form-group">
              <div className="form-image">
                <img src={diamond_login} width="80" height="80" />
              </div>
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
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <Submit />
            <Link className="btn btn-primary btn-block" to={"/sign-up"}>
              Sign up
            </Link>
            <Link className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
