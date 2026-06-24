import { Plus } from "lucide-react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard = ({
  imageUrl,
  title,
  description,
  price,
}: ProductCardProps) => {
  return (
    <div className="group flex justify-between gap-4 bg-gray-900/70 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white line-clamp-2">{title}</h3>

        <p className="mt-2 text-sm text-gray-500 line-clamp-3">{description}</p>

        <p className="mt-auto pt-4 text-lg font-bold text-white/90">₹{price}</p>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-36 h-28 object-cover rounded-xl"
        />

        <button
          className="
            absolute
            -bottom-3
            -right-3
            h-10
            w-10
            rounded-full
            bg-white
            text-black
            flex
            items-center
            justify-center
            shadow-lg
            hover:scale-110
            transition
            cursor-pointer
          "
        >
          <Plus size={22} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
