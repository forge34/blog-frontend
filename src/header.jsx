import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ loggedIn = false }) {
  return (
    <div>
      {loggedIn ? (
        <>
          <Link to="/home">Home</Link>
          <Link to="profile">Profile</Link>
        </>
      ) : (
        <>
          <Link to="login">Login</Link>
          <Link to="signup">Signup </Link>
        </>
      )}
    </div>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Header;
