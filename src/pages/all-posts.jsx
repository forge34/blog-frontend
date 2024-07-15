import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import PostLink from "../components/blog/post-link";
import { InfinitySpin } from "react-loader-spinner";
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
      <Suspense
        fallback={
          <InfinitySpin
            visible={true}
            width="580"
            color="#514ec1"
            ariaLabel="infinity-spin-loading"
          ></InfinitySpin>
        }
      >
        <Await resolve={data.posts} errorElement={<p>Loading failed ....</p>}>
          {(posts) =>
            posts.map((e) => {
              return (
                <PostLink
                  title={e.title}
                  id={e._id}
                  author={e.author.username}
                  key={e._id}
                ></PostLink>
              );
            })
          }
        </Await>
      </Suspense>
    </div>
  );
}

export default AllPosts;
