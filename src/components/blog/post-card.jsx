
import React from "react";
import PropTypes from "prop-types";

function PostCard({ title, body, author, date }) {
  return (
    <div>
      <div>
        <img></img>
      </div>
      <div>
        <h2>{title}</h2>

        <div>
          <p>{author}</p>
          <p>{date}</p>
        </div>
        <p>{body}</p>
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
