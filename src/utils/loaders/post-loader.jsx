import { defer } from "react-router-dom";

const fetchPostAll = async () => {
  const data = fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
    mode: "cors",
  });

  return defer({ posts: data });
};

const fetchPostOne = ({ params }) => {
  const data = fetch(
    `${import.meta.env.VITE_API_URL}/api/posts/${params.postid}`,
    {
      mode: "cors",
    },
  );

  return defer({ data });
};

export { fetchPostOne, fetchPostAll };
