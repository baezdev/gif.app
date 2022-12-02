import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el custom hook useFetchGifs.js", () => {
  test("Debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Goku"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("Debe retornar un arreglo de imagenes y no debe de estar cargando", async () => {
    const { result } = renderHook(() => useFetchGifs("Goku"));
    //Esperar a que pase algo
    await waitFor(() =>
      //Espera a que el resultado sea mayor a 0
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
