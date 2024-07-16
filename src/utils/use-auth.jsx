import { useEffect, useState } from "react";

function useAuth() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    async function check() {
      try {
        let data = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/verify`,
          {
            mode: "cors",
            credentials: "include",
          },
        );
        if (data.status === 401) {
          setLogged(false);
        } else if (data.status === 200) {
          data = await data.json();
          setUser(data.user);
          setLogged(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
    check();
  }, []);

  return { user, logged, setLogged };
}

export default useAuth;
