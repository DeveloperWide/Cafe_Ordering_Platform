import { MoveRight } from "lucide-react";
import heroImage from "../assets/hero.png";
import ProductCard from "../components/ProductCard";

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
          <button className="flex justify-center w-38 px-2 py-2 my-2 bg-secondary text-gray-950 font-bold rounded hover:cursor-pointer">
            Order Now <MoveRight style={{ paddingLeft: "5px" }} />
          </button>
        </div>
      </header>
      <main className="bg-cover flex flex-col w-screen ps-5 mx-3 my-5">
        <h1 className="text-2xl font-bold text-text">Popular Items</h1>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-3 mx-2">
          <ProductCard
            imageUrl="https://i.pinimg.com/1200x/81/92/7e/81927ee1cf8fcd7715530b0856cf553d.jpg"
            title="Cappuccino"
            price="₹199"
          />

          <ProductCard
            imageUrl="https://i.pinimg.com/736x/48/cb/47/48cb47cdcb1d05e48c45d79ff749238d.jpg"
            title="Veg Sandwich"
            price="₹149"
          />

          <ProductCard
            imageUrl="https://i.pinimg.com/736x/c9/ea/6b/c9ea6b9fad91868df056d0124ea32b6a.jpg"
            title="Chocolate Cake"
            price="₹179"
          />

          <ProductCard
            imageUrl="https://i.pinimg.com/736x/20/29/ef/2029ef7a62e7b477632b27c2db403bb8.jpg"
            title="Cold Coffee"
            price="₹199"
          />
        </div>
      </main>
    </div>
  );
};

export default Main;
