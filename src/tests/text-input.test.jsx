import { render, screen } from "@testing-library/react";
import { TextInput } from "../components/form-controls/text-input";
import userEvent from "@testing-library/user-event";

describe("", () => {
  it("Element is in the document", () => {
    render(<TextInput name="username" label="username"></TextInput>);

    expect(screen.getByLabelText("username")).toBeInTheDocument();
  });

  it("Element matches snap shot", () => {
    const { input } = render(
      <TextInput name="username" label="username"></TextInput>,
    );

    expect(input).toMatchSnapshot();
  });

  it("Element changes text", async () => {
    render(<TextInput name="username" label="username"></TextInput>);
    const field = screen.getByLabelText("username");

    const user = userEvent.setup();

    await user.type(field, "name");

    expect(field).toHaveValue("name");
  });
});
