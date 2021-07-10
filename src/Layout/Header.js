import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Deal Portal
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
