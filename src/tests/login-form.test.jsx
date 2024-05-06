import { render, screen } from "@testing-library/react";
import LoginForm from "../components/login-form";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Login form test", () => {
  it("should match snapshot", () => {
    const { form } = render(
      <MemoryRouter>
        <LoginForm></LoginForm>
      </MemoryRouter>,
    );

    expect(form).toMatchSnapshot();
  });

  it("should render submit button", () => {
    render(
      <MemoryRouter>
        <LoginForm></LoginForm>
      </MemoryRouter>,
    );

    expect(screen.getByRole("button")).toHaveTextContent("Login");
  });

  it("should navigate on submit", async () => {
    render(
      <MemoryRouter>
        <LoginForm></LoginForm>
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("button"));

    expect(location.pathname).toMatch("/");
  });
});
