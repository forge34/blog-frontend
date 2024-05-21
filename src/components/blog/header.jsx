import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ loggedIn = false }) {
  return (
    <div className="header">
      {loggedIn ? (
        <>
          <Link to="/home">
            <h3>Home</h3>
          </Link>
          <h2>Forge BLog API</h2>
          <Link to="profile">
            <h3>Profile</h3>
          </Link>
        </>
      ) : (
        <>
          <Link to="login">
            <h3>Login</h3>
          </Link>
          <h1>Forge BLog API</h1>
          <Link to="signup">
            <h3>Signup</h3>
          </Link>
        </>
      )}
    </div>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Header;
