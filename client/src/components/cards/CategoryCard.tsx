import blackGradientOverlay from "../../assets/overlay_Image.png";

interface CategoryCardProps {
  backgroundImage: string;
  title: string;
}

const CategoryCard = ({ backgroundImage, title }: CategoryCardProps) => {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-gray-900/70 transition-transform duration-300 hover:scale-105 hover:cursor-pointer h-100">
      <div
        className="layer w-full h-auto"
        style={{
          backgroundImage: `url(${blackGradientOverlay})`,
          backgroundPosition: "bottom left",
        }}
      >
        {/* Image */}
        <img
          src={backgroundImage}
          alt={`${title} Image`}
          className="h-90 w-full object-cover object-center"
        />
      </div>
      {/* Title */}
      <div className="px-1 py-2">
        <h3 className="text-center font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
