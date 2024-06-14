import React from "react";
import propTypes from "prop-types";
import styles from "../../styles/css/comment.module.css";

function Comemnt({ body, author, date }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h3>{author}</h3>
        <h6>{date}</h6>
      </div>
      <p>{body}</p>
    </div>
  );
}

Comemnt.propTypes = {
  body: propTypes.string,
  author: propTypes.string,
  date: propTypes.string,
};

export default Comemnt;
