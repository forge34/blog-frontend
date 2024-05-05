import React from "react";
import { Form } from "./form-controls/form";
import { TextInput } from "./form-controls/text-input";

function loginForm(props) {
  function handleSubmit(e) {}

  return (
    <>
      <Form handleSubmit={handleSubmit}>
        <TextInput name={"username"} label={"username"}></TextInput>
        <TextInput name={"password"} label={"password"}></TextInput>
      </Form>
    </>
  );
}

loginForm.propTypes = {};

export { loginForm };
