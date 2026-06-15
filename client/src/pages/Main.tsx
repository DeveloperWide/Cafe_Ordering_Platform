import { MoveRight } from "lucide-react";
import heroImage from "../assets/hero.png";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <header
        className="bg-cover flex flex-col justify-center ps-5 bg-center w-[80%] rounded-2xl"
        style={{
          width: "1200px",
          height: "500px",
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="w-[100] flex flex-col justify-center gap-y-2.5">
          <h1 className="text-5xl text-amber-50 flex flex-col gap-y-2 font-bold">
            Delicious Coffee
            <span>delivered to you</span>
          </h1>
          <p className="w-65">
            Order your favorite meals & drinks from{" "}
            <span className="font-semibold text-[#b08ee0]">BrewCafe.</span>
          </p>
          <button className="flex justify-center w-38 px-2 py-2 my-2 bg-secondary text-gray-950 font-bold rounded">
            Order Now <MoveRight style={{ paddingLeft: "5px" }} />
          </button>
        </div>
      </header>
      <main className="bg-cover flex flex-col w-screen ps-5 mx-3 my-5">
        <h1 className="text-2xl font-bold text-text">Popular Items</h1>
      </main>
    </div>
  );
};

export default Main;
