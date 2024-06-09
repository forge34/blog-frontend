import Header from "../components/blog/header";
import { Link, Outlet, useLocation } from "react-router-dom";
import PostCard from "../components/blog/post-card"
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const data = useLoaderData()


  return (<>
    <Header ></Header>
    <div>
      {location.pathname === "/home" ? (
        <>
          <Link to="posts" relative="path">
            See all posts
          </Link>
          {data.map((e) => {
            return (
              <PostCard
                title={e.title}
                id={e._id}
                author={e.author.username}
                key={e._id}
                body={e.body}
              ></PostCard>
            );
          })}

        </>
      ) : (
        <Outlet></Outlet>
      )}
    </div></>
  );
}
