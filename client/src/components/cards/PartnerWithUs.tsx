import { Link } from "react-router";
import BlackGradientLayer from "../../assets/overlay_Image.png";

interface PartnerWithUsProps {
  title: string;
  heading: string;
  headerText: string;
  redirectLink: string;
  backgroundImage: string;
}

const PartnerWithUs = ({
  title,
  heading,
  headerText,
  backgroundImage,
  redirectLink,
}: PartnerWithUsProps) => {
  return (
    <div
      className="w-[99%] md:w-[90%] h-100 bg-cover bg-center rounded-2xl"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="layer flex flex-col justify-end h-full w-full relative rounded-2xl"
        style={{ backgroundImage: `url(${BlackGradientLayer})` }}
      >
        <div className="header-text absolute top-0 py-2 left-4.5 bg-white/90 text-black font-semibold w-60 h-10 rounded-b text-center">
          {headerText}
        </div>
        <div className="bottom ps-2 py-2 pb-5 pl-7">
          <p className="text-secondary font-semibold italic">{title}</p>
          <h3 className="text-4xl font-bold text-white pb-2">{heading}</h3>
          <Link
            to={redirectLink}
            className="w-51.25 h-13 text-center px-5 py-2 rounded-full bg-secondary text-gray-900  font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
