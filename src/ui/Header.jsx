import { HiHome, HiMenu, HiX } from "react-icons/hi";
import {
  HiArrowRightEndOnRectangle,
  HiInboxStack,
  HiShoppingCart,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useCart } from "../context/CartContext";
import CartItem from "../components/Cart/CartItem";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [dark, setDark] = useState(false);
  const { cart } = useCart();
  const { logout } = useAuth();

  const itemPrice = cart.map((cartItem) => cartItem.price);
  console.log(itemPrice);

  const totalPrice = itemPrice.reduce((acc, curr) => acc + curr, 0);

  // const darkModeHandler = () => {
  //   setDark(!dark);
  //   document.body.classList.toggle("dark");
  // };

  return (
    <div className="w-full bg-blue-50 dark:bg-blue-950 p-4 flex justify-around items-center">
      <h2 className="text-blue-950 dark:text-blue-50 text-xl font-bold md:text-2xl lg:text-3xl">
        Online Shop
      </h2>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-blue-950"
        >
          {isMenuOpen ? (
            <HiX className="w-8 h-8" />
          ) : (
            <HiMenu className="w-8 h-8" />
          )}
        </button>
      </div>
      <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex`}>
        <ul className="flex flex-col md:flex-row md:gap-x-5">
          <li className="flex gap-x-2 my-2 items-center">
            <HiHome className="w-6 h-6 text-blue-950 dark:text-blue-50 hover:opacity-50" />{" "}
            <NavLink to="/" className="text-blue-950 dark:text-blue-50">
              Home
            </NavLink>
          </li>
          <li className="flex gap-x-2 my-2 items-center">
            <div className="relative">
              <HiShoppingCart
                onClick={() => setShowModal(true)}
                className="w-6 h-6 text-blue-950 dark:text-blue-50 hover:opacity-50"
              />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cart.length}{" "}
                </span>
              )}
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="text-blue-950 dark:text-blue-50"
            >
              Cart
            </button>
          </li>
          <li className="flex gap-x-2 my-2 items-center">
            <HiInboxStack className="w-6 h-6 text-blue-950 dark:text-blue-50 hover:opacity-50" />{" "}
            <NavLink to="/products" className="text-blue-950 dark:text-blue-50">
              Products
            </NavLink>
          </li>
          <li onClick={logout} className="my-2">
            <HiArrowRightEndOnRectangle className="w-7 h-7 text-red-600 cursor-pointer hover:opacity-50" />{" "}
          </li>
          {/* <li className="flex gap-x-2 my-2 items-center">
            <button
              className="text-xl dark:text-blue-50"
              onClick={() => darkModeHandler()}
            >
              {dark && <IoSunny />}
              {!dark && <IoMoon />}
            </button>
          </li> */}
        </ul>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <div className="flex justify-around self-center border-b-2">
            <h1 className="font-bold text-white text-xl  pb-6">
              Cart items ({cart.length})
            </h1>
            <h2 className="font-bold text-white text-l  pb-6">
              {" "}
              Total Price:<span className="text-red-600"> {totalPrice}</span>
            </h2>
          </div>

          {!cart.length ? (
            <h2 className="mt-7 text-blue-50 text-center">
              Your cart is empty!
            </h2>
          ) : (
            cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          )}
        </Modal>
      </div>
    </div>
  );
}

export default Header;
