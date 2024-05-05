import React from "react";
import PropTypes from "prop-types";

function Form({ handleSubmit = () => {}, children }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.element,
  handleSubmit: PropTypes.func,
};

export { Form };
