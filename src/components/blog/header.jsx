import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/css/header.module.css";
import Avvvatars from "avvvatars-react";
import propTypes from "prop-types";

function Header({ user, loggedIn }) {
  return (
    <div className={styles.container}>
      {loggedIn ? (
        <>
          <h1 className={styles.title}>Forge Blog</h1>
          <input
            type="search"
            placeholder="Search..."
            className={styles.search}
          ></input>
          <Link className={styles.home} to="/home">
            <p>Home</p>
          </Link>
          {(user.role === "EDITOR" || "ADMIN") && (
            <Link className={styles.createPost} to="posts/create">
              <p>Create Post</p>
            </Link>
          )}

          <span className={styles.avatar}>
            <Avvvatars value={user.username} size={34}></Avvvatars>
          </span>
        </>
      ) : (
        <>
          <h1 className={styles.title}>Forge Blog </h1>
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

Header.propTypes = {
  user: propTypes.object,
  loggedIn: propTypes.bool,
};

export default Header;
