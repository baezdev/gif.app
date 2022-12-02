import { render, screen } from "@testing-library/react";
import GifApp from "../src/GifApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("", () => {
    render(<GifApp />);
    screen.debug()
  });
});
