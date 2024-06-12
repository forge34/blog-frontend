import React from "react";
import PropTypes from "prop-types";

function Post({ title, body, author, date }) {
  return (
    <div >
      <h2>{title}</h2>

      <div>
        <p>{author}</p>
        <p>{date}</p>
      </div>
      <p>{body}</p>
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
