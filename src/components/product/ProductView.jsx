import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import http from "../../services/httpService";
import Loader from "../../ui/Loader";
import { HiArrowLeft } from "react-icons/hi";
import { useCart } from "../../context/CartContext";

function ProductView() {
  const [product, setProduct] = useState({});
  const [isLoadingSP, setIsLoadingSP] = useState(false);
  const { handleAddToCart, cart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch single product
  useEffect(() => {
    async function getProduct(id) {
      try {
        setIsLoadingSP(true);
        const { data } = await http.get(`/products/${id}`);
        setProduct(data);
        toast.success("View the product's info...");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoadingSP(false);
      }
    }
    getProduct(id);
  }, [id]);

  const isInCart = cart.some((cartItem) => cartItem.id === product.id);

  return isLoadingSP ? (
    <Loader />
  ) : (
    <>
      <div className="flex items-center gap-x-2 ml-32 mt-5">
        <HiArrowLeft
          onClick={() => navigate(-1)}
          className="text-white w-7 h-7 cursor-pointer hover:opacity-70"
        />
        <span
          onClick={() => navigate(-1)}
          className="text-white cursor-pointer text-lg"
        >
          Back
        </span>
      </div>
      <div className="flex justify-center gap-x-1 mt-16">
        <div className="hidden md:flex bg-white md:w-2/5  items-center flex-col p-5 rounded-sm h-auto">
          <h1 className="text-xl mb-6 text-center text-blue-950 font-sans font-bold">
            {product.title}
          </h1>
          <img
            src={product.image}
            alt={product.title}
            className="w-52 h-80 hover:scale-110 transition-transform transform duration-300 ease-in-out cursor-pointer"
          />
        </div>
        <div className="bg-white w-3/5 md:w-2/5 flex items-center flex-col p-5 rounded-sm  h-auto">
          <h1 className="text-blue-950 text-center font-bold text-2xl border-b-2 mb-9">
            Description
          </h1>
          <h2 className="text-blue-950 font-bold leading-6 font-sans list-outside">
            {product.description}
          </h2>
          <div className="mt-20 py-4 w-full">
            <p className=" text-blue-900 font-bold">{product.price}$</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={isInCart}
              className="shadow-lg shadow-blue-950
               bg-blue-950 text-white px-4 py-2 rounded-lg mt-2 hover:opacity-80 w-full"
            >
              {isInCart ? "In cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;
