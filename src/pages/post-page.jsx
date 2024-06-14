import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../components/blog/post";
import styles from "../styles/css/post-page.module.css";
import Comemnt from "../components/blog/comment";

function PostPage() {
  const data = useLoaderData();
  const author = data.author.username;
  console.log(data);

  async function submitComment(e) {
    e.preventDefault();

    const formEntry = Object.fromEntries(new FormData(e.target).entries());

    const options = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(formEntry),
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };

    const req = await fetch(
      "http://localhost:3000/api/posts/" + data._id + "/comments",
      options,
    );
    const res = await req.json();
  }
  return (
    <div className={styles.container}>
      <Post
        title={data.title}
        author={data.author.username}
        body={data.body}
        date={data.date}
      ></Post>

      <form onSubmit={submitComment} id="commentForm">
        <div className={styles.commentFormContainer}>
          <textarea
            name="body"
            id={styles.textarea}
            form="commentForm"
          ></textarea>

          <button className={styles.commentBtn} type="submit">
            Add comment
          </button>
        </div>
      </form>

      <div className={styles.commentsContainer}>
        {data.comments.map((e) => {
          return (
            <Comemnt
              key={e._id}
              body={e.body}
              author={author}
              date={e.comment_date}
            ></Comemnt>
          );
        })}
      </div>
    </div>
  );
}

export default PostPage;
