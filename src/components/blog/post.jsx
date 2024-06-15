import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/css/post.module.css";
import MarkdownPreview from "@uiw/react-markdown-preview";

function Post({ title, body, author, date }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <address>{author}</address>
        <time>{date}</time>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div data-color-mode="light" className={styles.markdownPreview}>
        <MarkdownPreview source={body}></MarkdownPreview>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
};

export default Post;
