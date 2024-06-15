import React, { useState } from "react";
import propTypes from "prop-types";
import styles from "../../styles/css/comment.module.css";
import like from "../../assets/heart.svg";

function Comemnt({ body, author, date }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <address className={styles.author}>{author}</address>
        <time className={styles.time}>{date}</time>
      </div>
      <p className={styles.body}>{body}</p>
      <div className={styles.bottomBar}>
        <img src={like} width={"20px"} height={"20px"} />
        <p>{likes}</p>
      </div>
    </div>
  );
}

Comemnt.propTypes = {
  body: propTypes.string,
  author: propTypes.string,
  date: propTypes.string,
};

export default Comemnt;
