import React from "react";
import { TextInput } from "./form-controls/text-input";

function loginForm(props) {
  function handleSubmit(e) {}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput name={"username"} label={"username"}></TextInput>
        <TextInput name={"password"} label={"password"}></TextInput>
        <button>Login</button>
      </form>
    </>
  );
}

loginForm.propTypes = {};

export { loginForm };
