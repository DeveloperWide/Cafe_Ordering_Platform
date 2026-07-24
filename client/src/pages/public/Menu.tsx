import { Dessert } from "lucide-react";
import Burgers from "../../components/menu/Burgers";
import ColdDrinks from "../../components/menu/ColdDrinks";
import Fries from "../../components/menu/Fries";
import Searchbar from "../../components/Searchbar";

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-10 my-10 px-5 py-5 gap-10">
      <h1 className="text-4xl px-3 py-3 font-bold text-secondary drop-shadow-[0_4px_12px_rgba(255,255,255,0.5)]">
        Browse BrewCafe Menu
      </h1>
      <Searchbar />

      {/* BrewCafe Food Items */}

      <Burgers />
      <Fries />
      <ColdDrinks />
      <Dessert />
    </div>
  );
};

export default Menu;
