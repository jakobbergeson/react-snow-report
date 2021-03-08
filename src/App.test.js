import { render, screen } from "@testing-library/react";
import App from "./App";

test("It renders", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
