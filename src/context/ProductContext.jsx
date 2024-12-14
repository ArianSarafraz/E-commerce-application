import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
// Context creation
const ProductContext = createContext();

export function ProductProvider({ children }) {
  // States
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  //  Set category function
  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  // Filter the products based on the selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        setProducts,
        isLoading,
        setIsLoading,
        setCategories,
        categories,
        selectedCategory,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
// A custom hook which returns the Products' context values
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("Product context is used outside the provider");
  return context;
};
