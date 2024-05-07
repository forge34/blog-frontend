import React from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "./form-controls/text-input";

function LoginForm() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const req = await fetch("http://localhost:3000/login", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const res = await req.json();

    // console.log(res.userId,res.token)
    localStorage.setItem("userId", res.userId);
    localStorage.setItem("jwt", res.token);

    navigate("/");
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <TextInput name={"username"} label={"username"}></TextInput>
        <TextInput
          password={true}
          name={"password"}
          label={"password"}
        ></TextInput>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
