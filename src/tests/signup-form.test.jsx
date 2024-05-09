import { render } from "@testing-library/react";
import SignupForm from "../components/authentication/signup-form";
import { MemoryRouter } from "react-router-dom";

describe("Signup form test", () => {
  it("should match snapshot", () => {
    const { form } = render(
      <MemoryRouter>
        <SignupForm></SignupForm>
      </MemoryRouter>,
    );

    expect(form).toMatchSnapshot();
  });
});
