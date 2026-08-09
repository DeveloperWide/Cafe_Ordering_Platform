import { Link } from "react-router";
import type { Product } from "../../types/products.types";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Link to={`/products/${data._id}`}>
      <div className="overflow-hidden rounded-2xl bg-gray-900/60 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl m-5">
        {/* Product Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={data.img.url}
            alt={data.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />

          <span
            className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${
              data.isAvailable ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {data.isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-4 p-5">
          <div>
            <h2 className="text-xl font-bold text-white">{data.title}</h2>

            <p className="mt-2 line-clamp-2 text-sm text-gray-500">
              {data.description}
            </p>
          </div>

          {/* Price & Stock */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-amber-600">₹{data.price}</p>
              <p className="text-sm text-gray-500">Stock: {data.stock}</p>
            </div>

            <button
              disabled={!data.isAvailable}
              className={`rounded-xl px-5 py-2 font-semibold transition ${
                data.isAvailable
                  ? "bg-amber-500 text-white hover:bg-amber-600"
                  : "cursor-not-allowed bg-gray-300 text-gray-600"
              }`}
            >
              {data.isAvailable ? "Order" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
