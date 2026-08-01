import { useParams } from "react-router";
import { useProductDetails } from "../../hooks/useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const { loading, product, error, refetch } = useProductDetails(id);

  if (!id) return <div>Invalid Product</div>;

  if (loading) return <div>Loading Product Details...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:mx-10 lg:gap-x-10  gap-y-5 px-5 py-10">
        <div className="left_side">
          <img
            src={product?.img.url}
            alt={product?.title}
            className="h- rounded-lg"
          />
        </div>
        <div className="right_side">
          <h2 className="uppercase pb-3 text-2xl md:text-3xl lg:text-4xl font-semibold">
            {product?.title}
          </h2>
          <p className="text-[#F67C29] font-bold pb-3 text-2xl lg:text-3xl">
            ₹{product?.price}
          </p>
          <p>{product?.description}</p>

          <div className="btns flex flex-col md:flex-row gap-4 my-5">
            <button className="flex-1 py-2 px-10 rounded-xl bg-[#F67C29] lg:text-xl text-white font-semibold uppercase">
              Add to Cart
            </button>
            <button className="flex-1 py-2 px-10 rounded-xl bg-gray-600 lg:text-xl text-white font-semibold uppercase">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
