import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Forms from "./components/form";
import BookingPage from "./pages/bookingPage";

test("Adds one", () => {
  // render the App component

  render(<BookingPage />);

  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
