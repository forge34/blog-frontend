import { defer } from "react-router-dom";

const fetchPostAll = () => {
  const data = fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
    mode: "cors",
  });

  return defer({ posts: data.then((res) => res.json()) });
};

const fetchPostOne = ({ params }) => {
  const data = fetch(
    `${import.meta.env.VITE_API_URL}/api/posts/${params.postid}`,
    {
      mode: "cors",
    },
  );

  return defer({ post: data.then((res) => res.json()) });
};

export { fetchPostOne, fetchPostAll };
