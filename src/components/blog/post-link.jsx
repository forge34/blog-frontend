import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostLink({ title, id, author }) {
  return (
    <>
      <h1>
        <Link to={id}>{title}</Link>
      </h1>
      <h3>{author}</h3>
    </>
  );
}

PostLink.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  author: PropTypes.string,
};

export default PostLink;
