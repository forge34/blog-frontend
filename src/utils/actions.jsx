import { redirect } from "react-router-dom";

async function createPost({  request }) {
  let data = await request.formData();

  data = Object.fromEntries(data.entries());
  const options = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      "Content-Type": "Application/json",
    },
  };

  fetch(`${import.meta.env.VITE_API_URL}/api/posts`, options);

  return redirect("/home");
}

export { createPost };
