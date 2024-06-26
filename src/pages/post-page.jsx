import React, { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import Post from "../components/blog/post";
import styles from "../styles/css/post-page.module.css";
import Comemnt from "../components/blog/comment";

function PostPage() {
  const data = useLoaderData();
  const auth = useOutletContext();
  async function submitComment(e) {
    e.preventDefault();

    const formEntry = Object.fromEntries(new FormData(e.target).entries());

    const options = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(formEntry),
      credentials: "include",
      headers: {
        "Content-Type": "Application/json",
      },
    };

    await fetch(
      `${import.meta.env.VITE_API_URL}/api/posts/` + data._id + "/comments",
      options
    );
  }
  return (
    <div className={styles.container}>
      <Post
        title={data.title}
        author={data.author.username}
        body={data.body}
        date={data.date}
      ></Post>
      {auth.logged ? (
        <form onSubmit={submitComment} id="commentForm">
          <div className={styles.commentFormContainer}>
            <h1>Comments ({data.comments.length})</h1>
            <textarea
              placeholder="Comment on post"
              name="body"
              id={styles.textarea}
              form="commentForm"
            ></textarea>

            <button className={styles.commentBtn} type="submit">
              Add comment
            </button>
          </div>
        </form>
      ) : (
        <h1>Only logged users can comment</h1>
      )}
      <div className={styles.commentsContainer}>
        {data.comments.map((e) => {
          return (
            <Comemnt
              key={e._id}
              body={e.body}
              author={e.author.username}
              date={e.comment_date}
            ></Comemnt>
          );
        })}
      </div>
    </div>
  );
}

export default PostPage;
