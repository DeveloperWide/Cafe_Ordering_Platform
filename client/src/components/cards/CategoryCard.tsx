import blackGradientOverlay from "../../assets/overlay_Image.png";

interface CategoryCardProps {
  backgroundImage: string;
  title: string;
}

const CategoryCard = ({ backgroundImage, title }: CategoryCardProps) => {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-gray-900/70 transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
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
          className="h-56 w-full object-cover object-center"
        />
      </div>
      {/* Title */}
      <div className="p-3">
        <h3 className="text-center font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
