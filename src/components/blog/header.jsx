import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/css/header.module.css";
import Avvvatars from "avvvatars-react";

function Header({}) {
  return (
    <div className={styles.container}>
      {localStorage.getItem("jwt") ? (
        <>
          <h2 className={styles.title}>Forge Blog API</h2>
          <input
            type="search"
            placeholder="Search..."
            className={styles.search}
          ></input>
          <Link className={styles.home} to="/home">
            <p>Home</p>
          </Link>
          <Link className={styles.createPost} to="posts/create">
            <p>Create Post</p>
          </Link>

          {/* <Link className={styles.logout} to="/logout"> */}
          {/*   <h3>Logout</h3> */}
          {/* </Link> */}
          <span className={styles.avatar}>
            <Avvvatars displayValue="FE" size={34}></Avvvatars>
          </span>
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
