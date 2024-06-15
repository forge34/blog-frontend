import React from "react";
import { useLoaderData } from "react-router-dom";
import PostLink from "../components/blog/post-link";

function AllPosts() {
  const data = useLoaderData();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      {data.map((e) => {
        return (
          <PostLink
            title={e.title}
            id={e._id}
            author={e.author.username}
            key={e._id}
          ></PostLink>
        );
      })}
    </div>
  );
}

export default AllPosts;
