import React from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/form-controls/text-input";
import styles from "../styles/css/form.module.css";

function LoginForm() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());
    const options = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "Application/json",
      },
    };

    const req = await fetch("http://localhost:3000/api/login", options);
    const res = await req.json();

    // console.log(res.userId,res.token)
    localStorage.setItem("userId", res.userId);
    localStorage.setItem("jwt", res.token);

    navigate("/");
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Login</h3>
      <form onSubmit={handleSubmit}>
        <TextInput name={"username"} label={"username"}></TextInput>
        <TextInput
          password={true}
          name={"password"}
          label={"password"}
        ></TextInput>
        <button className={styles.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
