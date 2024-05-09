import React from "react";
import { TextInput } from "../form-controls/text-input";
import { useNavigate } from "react-router-dom";

function SignupForm({}) {
  const navigate = useNavigate();

  async function handleSumbit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());

    const req = await fetch("http://localhost:3000/signup", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await req.json();
    console.log(res);
    navigate("/");
  }

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSumbit}>
        <TextInput name={"username"} label={"Usernam"}></TextInput>
        <TextInput
          name={"password"}
          password={true}
          label={"Password"}
        ></TextInput>

        <TextInput
          name={"confirmPassword"}
          label={"Confirm password"}
          password={true}
        ></TextInput>
        <label>
          {"Admin?"}
          <input type="checkbox" name="isAdmin"></input>
        </label>

        <button>Sign up</button>
      </form>
    </div>
  );
}

export default SignupForm;
