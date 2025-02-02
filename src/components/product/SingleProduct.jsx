import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function SingleProduct({ product, handleAddToCart }) {
  const { cart } = useCart();
  const isInCart = cart.some((cartItem) => cartItem.id === product.id);
  return (
    <div
      key={product.id}
      className="bg-white shadow-md rounded-lg p-6 flex flex-col"
    >
      <Link to={`${product.id}`}>
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-40 object-contain mb-4 hover:scale-110 transition-transform transform duration-300 ease-in-out cursor-pointer "
          />
        </div>
        <h2 className="text-xl font-bold h-20 py-5 mb-4 text-blue-950">
          {product.title.length > 45
            ? product.title.slice(0, 45)
            : product.title}
          <span className="text-sm"> (Click here)</span>
        </h2>
      </Link>
      <p className="text-blue-900 font-bold">${product.price}</p>
      <button
        onClick={() => handleAddToCart(product)}
        disabled={isInCart}
        className="shadow-lg shadow-blue-950 bg-blue-950 text-white px-4 py-2 rounded-lg mt-2 hover:opacity-80 w-full"
      >
        {isInCart ? "In cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default SingleProduct;
