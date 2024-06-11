import React from "react";
import propTypes from "prop-types";

function Checkbox({ name, label }) {
  return (
    <div className="checkbox">
      <label htmlFor={name}>{label}</label>
      <input type="checkbox" name={name}></input>
    </div>
  );
}

Checkbox.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
};

export default Checkbox;
