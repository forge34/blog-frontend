import React, { useState } from "react";
import styles from "../styles/css/create-post.module.css";
import { TextInput } from "../components/form-controls/text-input";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

function CreatePost({}) {
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const options = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      credentials: "include",
      headers: {
        "Content-Type": "Application/json",
        // Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    const req = await fetch("http://localhost:3000/api/posts", options);
    const res = await req.json();

    console.log(res);
  }

  return (
    <form onSubmit={handleSubmit} id={styles.postForm}>
      <div className={styles.container}>
        <TextInput name={"title"} label={"Post title"}></TextInput>{" "}
        <label htmlFor={"textArea"} style={{ margin: "0.5em 0" }}>
          Post body
        </label>
        <div data-color-Mode="light" className={styles.editor}>
          <MDEditor
            style={{ margin: "0.7em 0" }}
            height="90%"
            value={text}
            onChange={setText}
            textareaProps={{
              form: styles.postForm,
              id: "textArea",
              name: "body",
              maxLength: 10000,
              placeholder: "Enter post body",
            }}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
          />
        </div>
        <button className={styles.btn}>Submit post</button>
      </div>
    </form>
  );
}

CreatePost.propTypes = {};

export default CreatePost;
