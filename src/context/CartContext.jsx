import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

const CartContext = createContext();

function CartProvider({ children }) {
  // Cart                  localStorage Custom hook
  const [cart, setCart] = useLocalStorage("Cart", []);

  // Handlers
  const handleAddToCart = (product) => {
    if (cart.some((cartItem) => cartItem.id === product.id)) {
      return;
    }
    setCart((prevCart) => [...prevCart, product]);
    toast.success("Product added to cart.");
  };

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.error("Product removed from the cart.");
  };

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        handleDelete,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
// / A custom hook which returns the Cart's context values
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Context is used outside the cart provider..");
  return context;
};

export default CartProvider;
