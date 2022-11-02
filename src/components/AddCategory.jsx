import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState("");

  const handleInputChange = ({ target }) => setValue(target.value);

  const handleAddCategory = (e) => {
    e.preventDefault();

    const valueCategory = value.trim();
    if (valueCategory.length <= 3) {
      return;
    }
    onNewCategory(valueCategory);
    setValue("");
  };

  return (
    <form className="max-w-xl mx-auto my-12" onSubmit={handleAddCategory}>
      <div className="p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <input
          type="text"
          placeholder="Buscar gifs"
          value={value}
          onChange={handleInputChange}
          className="w-full text-3xl font-bold focus:outline-none py-3 h-full px-4 text-center bg-white"
        />
      </div>
    </form>
  );
};
