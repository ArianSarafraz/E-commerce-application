import { useProducts } from "../context/ProductContext";
import CategoriesSidebar from "../components/categories/CategoriesSidebar";
import ProductsList from "../components/products/ProductsList";
import Loader from "../ui/Loader";
import { useEffect } from "react";
import http from "../services/httpService";
import toast from "react-hot-toast";

function Products() {
  const {
    isLoading,
    products,
    categories,
    setCategory,
    setIsLoading,
    setProducts,
    setCategories,
  } = useProducts();

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const { data } = await http.get("/products");
        setProducts(data);
        const { data: categories } = await http.get("/products/categories");
        setCategories(categories);
        toast.success("You can see the products...");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [setProducts, setIsLoading, setCategories]);

  if (isLoading) return <Loader />;

  return (
    <div className="flex">
      <div className="w-md:w-3/4 p-4">
        <ProductsList products={products} />
      </div>
      <div className="hidden md:flex md:w-1/4 p-4">
        <CategoriesSidebar
          isLoading={isLoading}
          categories={categories}
          setCategory={setCategory}
        />
      </div>
    </div>
  );
}

export default Products;
