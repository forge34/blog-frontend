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
import { InfinitySpin } from "react-loader-spinner";

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
          <Suspense
            fallback={
              <InfinitySpin
                visible={true}
                width="580"
                color="#514ec1"
                ariaLabel="infinity-spin-loading"
              ></InfinitySpin>
            }
          >
            <Await
              resolve={data.posts}
              errorElement={<p>Loading failed ....</p>}
            >
              <div className={styles.cardContainer}>
                <PostData></PostData>
              </div>
            </Await>
          </Suspense>
        </div>
      ) : (
        <Outlet context={auth}></Outlet>
      )}
    </>
  );
}

function PostData() {
  const posts = useAsyncValue();
  console.log(posts);
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
