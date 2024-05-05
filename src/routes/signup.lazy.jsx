import { createLazyFileRoute } from "@tanstack/react-router";
import { signupForm } from "../components/signup-form";

export const Route = createLazyFileRoute("/signup")({
  component: signupForm,
});
