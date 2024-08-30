import { screen,render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Grocery from "../Grocery";


test("should load grocery component", () => {
    render(<Grocery />);
    const heading = screen.getByRole("paragraph");
    expect(heading).toBeInTheDocument();
});