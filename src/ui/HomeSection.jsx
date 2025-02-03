function HomeSection() {
  return (
    <div className="section-container mt-20 mb-24 grid grid-cols-3 grid-rows-2 gap-16 w-3/5  place-self-center">
      <div className="rounded-lg overflow-hidden">
        <img
          src="woman2.jpg"
          alt="woman-fashion"
          className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80 rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="row-span-2 rounded-lg overflow-hidden">
        <img
          src="/man.jpg"
          alt="man-fasion"
          className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80 rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="rounded-lg overflow-hidden">
        <img
          src="woman.jpg"
          alt="woman-fashion"
          className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80 rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="rounded-lg overflow-hidden">
        <img
          src="chris.jpg"
          alt="woman-fashion"
          className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80 rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="rounded-lg overflow-hidden">
        <img
          src="fashion-girl.jpg"
          alt="woman-fashion"
          className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80 rounded-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HomeSection;
