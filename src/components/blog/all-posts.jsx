import React from "react";
import { useLoaderData } from "react-router-dom";
import PostLink from "./post-link";

function AllPosts() {
  const data = useLoaderData();

  return (
    <>
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
    </>
  );
}

export default AllPosts;
