const fetchPostAll = () => {
  const data = fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
    mode: "cors",
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  return data;
};

const fetchPostOne = ({ params }) => {
  const data = fetch(
    `${import.meta.env.VITE_API_URL}/api/posts/${params.postid}`,
    {
      mode: "cors",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );

  return data;
};

export { fetchPostOne, fetchPostAll };
