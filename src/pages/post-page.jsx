import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../components/blog/post";

function PostPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Post
        title={data.title}
        author={data.author.username}
        body={data.body}
        date={data.date}
      ></Post>
    </div>
  );
}

export default PostPage;
