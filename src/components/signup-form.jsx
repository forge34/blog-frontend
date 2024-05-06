import React from "react";
import { TextInput } from "./form-controls/text-input";
import { useNavigate } from "react-router-dom";

function SignupForm({}) {
  const navigate = useNavigate();

  function handleSumbit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSumbit}>
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
    </div>
  );
}

export default SignupForm;
