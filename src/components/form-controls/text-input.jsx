import propTypes from "prop-types";
import { useState } from "react";

const TextInput = ({
  name,
  label,
  handleChange = () => {},
  password = false,
}) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <label>
        {label}
        <input
          name={name}
          value={value}
          type={password ? "password" : "text"}
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
  password: propTypes.bool,
};

export { TextInput };
