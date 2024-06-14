import React from "react";
import PropTypes from "prop-types";
import {  useNavigate } from "react-router-dom";
import styles from "../../styles/css/post-link.module.css";
import propTypes from "prop-types";

function PostLink({ title, id, author, date = "2024-06-11" }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.info}>
          <p>{author}</p>
          <p>{date}</p>
        </div>
        <h3>{title}</h3>
      </div>

      <button
        className={styles.btn}
        onClick={() => {
          navigate(id);
        }}
      >
        Read Post
      </button>
    </div>
  );
}

PostLink.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  author: PropTypes.string,
  date: propTypes.string,
};

export default PostLink;
