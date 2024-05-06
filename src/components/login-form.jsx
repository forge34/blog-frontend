import React from "react";
import { TextInput } from "./form-controls/text-input";

function LoginForm() {
  function handleSubmit(e) {}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput name={"username"} label={"username"}></TextInput>
        <TextInput name={"password"} label={"password"}></TextInput>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

LoginForm.propTypes = {};

export { LoginForm };
