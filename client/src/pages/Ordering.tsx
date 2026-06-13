import { Link } from "react-router";

const Ordering = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="flex flex-row">
        <Link to={"/restaurant"} className="px-2">
          Restaurant
        </Link>
        <Link to={"/"}>Home</Link>
      </p>
      <h1 className="text-5xl font-semibold italic text-amber-700">
        Ordering Page
      </h1>
    </div>
  );
};

export default Ordering;
