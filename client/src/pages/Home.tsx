import { Link } from "react-router";

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="flex flex-row">
        <Link to={"/restaurant"} className="px-2">
          Restaurant{" "}
        </Link>{" "}
        <Link to={"/order"}>Ordering</Link>
      </p>
      <h1 className="text-5xl font-semibold italic text-amber-700">
        Home Page
      </h1>
    </div>
  );
};

export default Home;
