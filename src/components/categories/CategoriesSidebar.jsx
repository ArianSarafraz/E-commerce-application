function CategoriesSidebar({ categories, setCategory }) {
  return (
    <div className=" flex h-96 w-full bg-blue-950 mt-24 mr-12 rounded-lg  flex-col items-center">
      <h1 className="font-bold text-xl mb-7 text-blue-50">
        Filter by category
      </h1>
      <ul>
        <li className="my-5">
          <button
            onClick={() => setCategory("all")}
            className="shadow-sm shadow-white w-60 h-10 bg-blue-50 rounded-lg text-blue-950 hover:opacity-70"
          >
            All
          </button>
        </li>
        {categories.map((category) => (
          <li key={category} className="my-5">
            <button
              onClick={() => setCategory(category)}
              className="shadow-sm shadow-white w-60 h-10 bg-blue-50 rounded-lg text-blue-950 hover:opacity-70"
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
