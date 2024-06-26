import React from "react";
import { TextInput } from "../components/form-controls/text-input";
import { useNavigate } from "react-router-dom";
import styles from "../styles/css/form.module.css";
import Checkbox from "../components/form-controls/checkbox";

function SignupForm({}) {
  const navigate = useNavigate();

  async function handleSumbit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());

    const req = await fetch(
      "https://blog-backend-production-8991.up.railway.app/api/signup",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = await req.json();
    console.log(res);
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <h3>Signup</h3>
      <form onSubmit={handleSumbit}>
        <TextInput name={"username"} label={"Username"}></TextInput>
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
        <Checkbox label={"is Admin?"} name={"isAdmin"}></Checkbox>
        <button className={styles.btn}>Sign up</button>
      </form>
    </div>
  );
}

export default SignupForm;
