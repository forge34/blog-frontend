import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/sass/post-card.module.scss";

function PostCard({ title, body, author, date = "2/4/2024" }) {
  return (
    <div className={styles.container}>
      <img src={"https://placehold.co/600x400"}></img>
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <p>{author}</p>
          <p>{date}</p>
        </div>
        <h2>{title}</h2>

        <p className={styles.cardText}>
          {body.split(" ").length > 150 ? body.substring(0, 150) : body}
        </p>
        <button className={styles.cardBtn}> Read post </button>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
};

export default PostCard;
