import blackGradientOverlay from "../../assets/overlay_Image.png";

interface CafeCardProps {
  backgroundImage: string;
  title: string;
  discount: number;
}

const CafeCard = ({ backgroundImage, title, discount }: CafeCardProps) => {
  return (
    <div
      className="cafeCard h-70 relative overflow-hidden bg-cover bg-center rounded-2xl"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Discount Badge */}
      <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
        {discount}% OFF
      </div>

      <div
        className="overlay flex flex-col justify-end h-full p-4"
        style={{ backgroundImage: `url(${blackGradientOverlay})` }}
      >
        <p className="text-secondary font-semibold">Cafe</p>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default CafeCard;
