import { useState } from "react";
import NotFound from "../../ui/NotFound";
import SingleProduct from "../product/SingleProduct";
import { useCart } from "../../context/CartContext";
import SeacrhInput from "../../ui/SeacrhInput";

function ProductsList({ products }) {
  const [searchVal, setSearchVal] = useState("");
  const { handleAddToCart } = useCart();

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchVal)
  );

  return (
    <>
      <div className="w-full flex justify-center">
        <SeacrhInput className="w-1/2" value={searchVal} setValue={setSearchVal} />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
        {filteredProducts.length == 0 ? (
          <NotFound text="Found no products" />
        ) : (
          filteredProducts.map((product) => (
            <SingleProduct
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ProductsList;
