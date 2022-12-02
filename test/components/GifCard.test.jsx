import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard";

describe("Pruebas en <GifCard />", () => {
  const title = "Goku";
  const url = "https:";

  test("match con el snapshot", () => {
    const { container } = render(<GifCard title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el url y el alt indicado", () => {
    render(<GifCard title={title} url={url} />);
    /* screen.debug(); */
    /* expect(screen.getByRole("img").src).toBe(url);
    expect(screen.getByRole("img").alt).toBe(title); */
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifCard title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
