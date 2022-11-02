import { useState } from "react";
import { AddCategory, GifCategory } from "./components";

const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <main className="max-w-screen-xl mx-auto">
      <h1 className="text-5xl font-black underline my-6 text-center">GifApp</h1>

      <AddCategory onNewCategory={onAddCategory} />
      <section>
        {categories.map((category) => (
          <GifCategory category={category} key={category} />
        ))}
      </section>
    </main>
  );
};

export default GifApp;
