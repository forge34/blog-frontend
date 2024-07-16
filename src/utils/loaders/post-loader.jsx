import { defer } from "react-router-dom";

const fetchPostAll = async () => {
  const data = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
    mode: "cors",
  });

  return defer({ posts: data.json() });
};

const fetchPostOne = async ({ params }) => {
  const data = await fetch(
    `${import.meta.env.VITE_API_URL}/api/posts/${params.postid}`,
    {
      mode: "cors",
    },
  );

  return defer({ post: data.json() });
};

export { fetchPostOne, fetchPostAll };
