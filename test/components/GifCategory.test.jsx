import { render, screen } from "@testing-library/react";

import { GifCategory } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifCategory />", () => {
  const category = "Goku";

  test("Debe de mostrar el loading", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifCategory category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando cargan las imagenes desde useFetchGifs", () => {
    const gifs = [
      {
        id: "uihrwe",
        title: "Dragon Ball Super GIF by Toei Animation",
        url: "https://media1.giphy.com/media/WOb8EeFziTQNE02WXs/giphy.gif?cid=73ecd7c5olgl9gdk5ow5cyo3g0v4tquxxqizz54r536arzmv&rid=giphy.gif&ct=g",
      },
      {
        id: "uihrwfdsfe",
        title: "Dragon Ball Super GIF by Toei Animation",
        url: "https://media1.giphy.com/media/WOb8EeFziTQNE02WXs/giphy.gif?cid=73ecd7c5olgl9gdk5ow5cyo3g0v4tquxxqizz54r536arzmv&rid=giphy.gif&ct=g",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifCategory category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
