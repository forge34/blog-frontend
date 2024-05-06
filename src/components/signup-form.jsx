import React from "react";
import { Form } from "./form-controls/form";
import { TextInput } from "./form-controls/text-input";

function SignupForm({}) {
  function handleSumbit() {}
  console.log("render signupForm");

  return (
    <form onSubmit={handleSumbit()}>
      <TextInput name={"username"} label={"Usernam"}></TextInput>
      <TextInput name={"firstname"} label={"Firstname"}></TextInput>
      <TextInput name={"lastname"} label={"Lastname"}></TextInput>
      <TextInput name={"password"} label={"Password"}></TextInput>
      <TextInput
        name={"confirmpassword"}
        label={"Confirm password"}
      ></TextInput>

      <button>Sign up</button>
    </form>
  );
}

export { SignupForm };
