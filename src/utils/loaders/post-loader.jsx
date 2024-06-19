const fetchPostAll = () => {
  const data = fetch("http://localhost:3000/api/posts", {
    mode: "cors",
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  return data;
};

const fetchPostOne = ({ params }) => {
  const data = fetch(`http://localhost:3000/api/posts/${params.postid}`, {
    mode: "cors",
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  return data;
};

export { fetchPostOne, fetchPostAll };
