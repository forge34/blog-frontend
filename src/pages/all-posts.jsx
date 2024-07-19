import React, { Suspense } from "react";
import {
  Await,
  useAsyncValue,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import PostLink from "../components/blog/post-link";
import { InfinitySpin } from "react-loader-spinner";

function PostData() {
  const posts = useAsyncValue();
  return (
    <>
      {posts.map((e) => {
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

function AllPosts() {
  const data = useRouteLoaderData("home");

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
      <Suspense
        fallback={
          <InfinitySpin
            visible={true}
            width="280"
            ariaLabel="infinity-spin-loading"
          />
        }
      >
        <Await resolve={data.posts} errorElement={<p>Loading failed ....</p>}>
          <PostData></PostData>
        </Await>
      </Suspense>
    </div>
  );
}

export default AllPosts;
