import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostLink({ title, id, author }) {
  return (
    <Link to={id}>
      <h1>{title}</h1>
      <h3>{author}</h3>
    </Link>
  );
}

PostLink.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  author: PropTypes.string,
};

export default PostLink;
