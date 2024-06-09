import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../../styles/css/header.module.css";

function Header({}) {
  return (
    <div className={styles.container}>
      {localStorage.getItem("jwt") ? (
        <>
          <h2 className="title">Forge Blog API</h2>

          <input type="search" className="search-bar"></input>
          <Link to="/home">
            <h3>Home</h3>
          </Link>
        </>
      ) : (
        <>
          <h1>Forge BLog API</h1>
          <Link to="/login">
            <h3>Login</h3>
          </Link>
          <Link to="/signup">
            <h3>Create Account</h3>
          </Link>
        </>
      )}
    </div>
  );
}

Header.propTypes = {};

export default Header;
