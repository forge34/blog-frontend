import propTypes from "prop-types";
import { useState } from "react";

const TextInput = ({ name, label, handleChange = () => {} }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <label>
        {label}
        <input
          name={name}
          value={value}
          onChange={(e) => {
            handleChange(e);
            setValue(e.target.value);
          }}
        ></input>
      </label>
    </div>
  );
};

TextInput.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  handleChange: propTypes.func,
};

export { TextInput };
