import { HiOutlineTrash } from "react-icons/hi";
import { useCart } from "../../context/CartContext";

function CartItem({ cartItem }) {
  const { handleDelete } = useCart();
  return (
    <div className=" w-full h-20 flex justify-around items-center bg-blue-50 rounded-lg my-5 hover:opacity-80 cursor-pointer">
      <img
        src={cartItem.image}
        alt={cartItem.title}
        className="w-10 h-10 rounded-xl"
      />
      <div className="flex flex-col max-w-32">
        <p className="hidden md:block text-sm font-bold text-blue-950">
          {cartItem.title.length > 22
            ? cartItem.title.slice(0, 23)
            : cartItem.title}
        </p>
        <span className="hidden sm:block font-bold text-sm text-blue-950">
          {cartItem.price} $
        </span>
      </div>
      <HiOutlineTrash
        className="w-6 h-6 text-red-600"
        onClick={() => handleDelete(cartItem.id)}
      />
    </div>
  );
}

export default CartItem;
