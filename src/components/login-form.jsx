import React from "react";
import { TextInput } from "./form-controls/text-input";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <TextInput name={"username"} label={"username"}></TextInput>
        <TextInput name={"password"} label={"password"}></TextInput>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
