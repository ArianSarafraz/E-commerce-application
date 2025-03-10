import { useState } from "react";

function CategoriesSidebar({ categories, setCategory }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleActiveCategory = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className=" flex h-96 w-full bg-blue-950 mt-24 mr-12 rounded-lg  flex-col items-center">
      <h1 className="font-bold text-xl mb-7 text-blue-50">
        Filter by category
      </h1>
      <ul>
        <li className="my-5">
          <button
            onClick={() => handleActiveCategory("all")}
            className="shadow-sm shadow-white w-60 h-10 bg-blue-50 rounded-lg text-blue-950 hover:opacity-80"
          >
            All
          </button>
        </li>
        {categories.map((category) => (
          <li key={category} className="my-5">
            <button
              onClick={() => handleActiveCategory(category)}
              className={`shadow-sm shadow-white w-60 h-10 bg-blue-50 rounded-lg text-blue-950 hover:opacity-80
              ${activeCategory === category ? "opacity-40" : ""}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesSidebar;
