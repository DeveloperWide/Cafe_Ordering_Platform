import { Link } from "react-router";

const Restaurant = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="flex flex-row">
        <Link to={"/"} className="px-2">
          Home
        </Link>
        <Link to={"/order"}>Ordering</Link>
      </p>
      <h1 className="text-5xl font-semibold italic text-amber-700">
        Restaurant Page
      </h1>
    </div>
  );
};

export default Restaurant;
