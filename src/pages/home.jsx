import Header from "../components/blog/header";
import { Link, Outlet, useLocation } from "react-router-dom";
import PostCard from "../components/blog/post-card";
import { useLoaderData } from "react-router-dom";
import styles from "../styles/css/home.module.css";
import useAuth from "../utils/use-auth";

export default function Home() {
  const location = useLocation();
  const data = useLoaderData();
  const auth = useAuth();
  return (
    <>
      <Header user={auth.user} loggedIn={auth.logged}></Header>
      {location.pathname === "/home" ? (
        <div className={styles.container}>
          <Link to="posts" className={styles.title} relative="path">
            See all posts
          </Link>
          <div className={styles.cardContainer}>
            {data.map((e, i) => {
              return (
                i < 3 && (
                  <PostCard
                    title={e.title}
                    id={e._id}
                    author={e.author.username}
                    key={e._id}
                    body={e.body}
                    date={e.date}
                  ></PostCard>
                )
              );
            })}
          </div>
        </div>
      ) : (
        <Outlet context={auth}></Outlet>
      )}
    </>
  );
}
