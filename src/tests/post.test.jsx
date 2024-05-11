import { render, screen } from "@testing-library/react";
import Post from "../components/blog/post";
import PostLink from "../components/blog/post-link";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

const routes = createMemoryRouter(
  [
    {
      path: "/",
      element: (
        <>
          <PostLink title="First post" id="testid"></PostLink>
        </>
      ),
    },
    {
      path: "/:testid",
      element: <h1>Hello there</h1>,
    },
  ],
  { initialIndex: 0, initialEntries: ["/"] },
);

describe("Post component test", () => {
  const renderPost = () => {
    return render(
      <Post
        title="First post"
        author="forge"
        date="09/05/2024"
        body="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
      ></Post>,
    );
  };

  it("should match snapshot", () => {
    const { post } = renderPost();

    expect(post).toMatchSnapshot();
  });

  it("should render props correctly", () => {
    renderPost();

    expect(screen.getByRole("heading").textContent).toMatch("First post");
    expect(screen.getAllByRole("paragraph")[0].textContent).not.toEqual("");
    expect(screen.getAllByRole("paragraph")[1].textContent).not.toEqual("");
  });
});

describe("PostLink component test", () => {
  const RenderPostLink = () => {
    return render(<RouterProvider router={routes}></RouterProvider>);
  };

  it("Should match snapshot", () => {
    const postLink = RenderPostLink();

    expect(postLink).toMatchSnapshot();
  });

  it("should have link to correct post ", () => {
    RenderPostLink();

    expect(screen.getByRole("link")).toHaveProperty(
      "href",
      "http://localhost:3000/testid",
    );
  });
});
