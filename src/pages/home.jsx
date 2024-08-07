import Header from "../components/blog/header";
import {
  Await,
  Link,
  Outlet,
  useAsyncValue,
  useLocation,
} from "react-router-dom";
import PostCard from "../components/blog/post-card";
import { useLoaderData } from "react-router-dom";
import styles from "../styles/css/home.module.css";
import useAuth from "../utils/use-auth";
import { Suspense } from "react";
import "ldrs/chaoticOrbit";
import SpinnerWrapper from "../components/blog/spinner.jsx";

export default function Home() {
  const location = useLocation();
  const data = useLoaderData();
  const auth = useAuth();

  return (
    <>
      {location.pathname === "/home" ? (
        <>
          <Suspense
            fallback={
              <SpinnerWrapper>
                <l-chaotic-orbit size={160} />
              </SpinnerWrapper>
            }
          >
            <Await
              resolve={data.posts}
              errorElement={<p>Loading failed ....</p>}
            >
              <Header user={auth.user} loggedIn={auth.logged}></Header>
              <div className={styles.container}>
                <Link to="posts" className={styles.title} relative="path">
                  See all posts
                </Link>
                <div className={styles.cardContainer}>
                  <PostData></PostData>
                </div>
              </div>
            </Await>
          </Suspense>
        </>
      ) : (
        <>
          <Header user={auth.user} loggedIn={auth.logged}></Header>
          <Outlet context={auth}></Outlet>
        </>
      )}
    </>
  );
}

function PostData() {
  const posts = useAsyncValue();
  return (
    <>
      {posts.map((e, i) => {
        {
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
        }
      })}
    </>
  );
}
