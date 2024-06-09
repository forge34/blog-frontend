import React from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/form-controls/text-input";

function LoginForm() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());

    const req = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "Application/json",
        // "Content-Type": "Indexlication/x-www-form-urlencoded",
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
