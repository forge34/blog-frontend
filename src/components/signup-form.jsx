import React from "react";
import { Form } from "./form-controls/form";
import { TextInput } from "./form-controls/text-input";

function signupForm({}) {
  function handleSumbit() {}
  console.log("render signupForm");
  return (
    <Form handleSubmit={handleSumbit}>
      <TextInput name={"username"} label={"Usernam"}></TextInput>
      <TextInput name={"firstname"} label={"Firstname"}></TextInput>
      <TextInput name={"lastname"} label={"Lastname"}></TextInput>
      <TextInput name={"password"} label={"Password"}></TextInput>
      <TextInput
        name={"confirmpassword"}
        label={"Confirm password"}
      ></TextInput>
    </Form>
  );
}

export { signupForm };
