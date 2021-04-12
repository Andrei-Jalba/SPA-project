import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select, { components } from "react-select";
import "./Navbar.css";

const Option = (props) => {
  return (
    <Link to={props.data.to}>
      <components.Option {...props} />
    </Link>
  );
};

const userOptions = [
  { value: "logout", label: "Logout", to: "/sign-in" },
  { value: "settings", label: "Settings", to: "/main" },
  { value: "profile", label: "Profile", to: "/main" },
];

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <h1>TEILOR</h1>

        <div className="userInfo">
          <span>Welcome User</span>
          <Select
            components={{ Option }}
            styles={{
              option: (base) => ({
                ...base,
                height: "100%",
                // todo
              }),
            }}
            options={userOptions}
          />
        </div>
      </nav>
    );
  }
}
