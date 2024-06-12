import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/css/header.module.css";

function Header({}) {
  return (
    <div className={styles.container}>
      {localStorage.getItem("jwt") ? (
        <>
          <h2 className="title">Forge Blog API</h2>
          <input
            type="search"
            placeholder="Search..."
            className={styles.search}
          ></input>
          <Link className={styles.home} to="/home">
            <h3>Home</h3>
          </Link>
          <Link className={styles.createPost} to="posts/create">
            <h3>Create Post</h3>
          </Link>

          <Link className={styles.logout} to="/logout">
            <h3>Logout</h3>
          </Link>
        </>
      ) : (
        <>
          <h1>Forge Blog </h1>
          <input
            type="search"
            className={styles.search}
            placeholder="Search..."
          ></input>
          <Link className={styles.login} to="/login">
            <h3>Login</h3>
          </Link>
          <Link className={styles.signup} to="/signup">
            <h3>Create Account</h3>
          </Link>
        </>
      )}
    </div>
  );
}

Header.propTypes = {};

export default Header;
