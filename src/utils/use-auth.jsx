import { useEffect, useState } from "react";

function useAuth() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    async function check() {
      let data = await fetch("http://localhost:3000/api/users/verify", {
        mode: "cors",
        credentials: "include",
      });
      if (data.status === 401) {
        setLogged(false);
      } else if (data.status === 200) {
        data = await data.json();
        setUser(data.user);
        setLogged(true);
      }
    }
    check();
  }, []);

  return { user, logged, setLogged };
}

export default useAuth;
