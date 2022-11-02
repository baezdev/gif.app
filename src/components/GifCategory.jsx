import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./";

export const GifCategory = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="mb-10">
      <h3 className="text-4xl font-extrabold mb-5">{category}</h3>
      {isLoading && <p className="text-2xl font-bold">Cargando...</p>}
      <section className="grid grid-cols-3 gap-5">
        {images.map((gif) => (
          <GifCard {...gif} key={gif.id} />
        ))}
      </section>
    </div>
  );
};
