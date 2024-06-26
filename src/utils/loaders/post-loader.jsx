const fetchPostAll = () => {
  const data = fetch(
    "https://blog-backend-production-8991.up.railway.app/api/posts",
    {
      mode: "cors",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );

  return data;
};

const fetchPostOne = ({ params }) => {
  const data = fetch(
    `https://blog-backend-production-8991.up.railway.app/api/posts/${params.postid}`,
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
