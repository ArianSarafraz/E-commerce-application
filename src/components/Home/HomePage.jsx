import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-full h-4/5 flex justify-center items-center px-5 gap-x-10">
      <div className="hidden md:block md:w-1/2 max-h-screen">
        <img src="/Home2.png" alt="products" className="home-image" />
      </div>
      <div className="w-full py-16 md:py-0 md:w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-xl text-blue-50 ">
          Welcome to our e-commerce store, your one-stop-shop for all your
          needs! We offer a diverse range of products to cater to every taste
          and preference. Explore our exquisite collection of jewelry, perfect
          for adding a touch of elegance to any outfit. Dive into our trendy
          men&apos;s clothing section for the latest styles and comfortable
          wear. Discover our stylish women&apos;s clothing, designed to make
          every woman feel confident and chic. Don&apos;t miss out on our
          cutting-edge electronics, featuring the latest gadgets and devices to
          enhance your lifestyle. Shop with us for quality, variety, and an
          exceptional shopping experience.
        </h2>
        <Link
          to="/products"
          className="text-center bg-blue-50 text-blue-950 w-3/4 rounded-lg hover:opacity-80 font-bold shadow-2xl shadow-white py-2 mt-10"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
