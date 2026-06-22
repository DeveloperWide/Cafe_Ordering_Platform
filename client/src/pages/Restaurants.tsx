import pizzaImage from "../assets/pizza.jpg";
import { IconInvoice, IconTruckDelivery } from "@tabler/icons-react";
import { Clock, Search } from "lucide-react";
import { useState } from "react";
import Offers from "../components/menu/Offers";
import Burgers from "../components/menu/Burgers";
import Fries from "../components/menu/Fries";
import Snacks from "../components/menu/Snacks";
import Salads from "../components/menu/Salads";
import ColdDrinks from "../components/menu/ColdDrinks";
import HappyMeal from "../components/menu/HappyMeal";
import Desserts from "../components/menu/Desserts";
import HotDrinks from "../components/menu/HotDrinks";
import Sauces from "../components/menu/Sauces";
import Orbit from "../components/menu/Orbit";

const menu = [
  {
    id: "offers",
    component: Offers,
    item: "Offers",
  },
  {
    id: "burgers",
    component: Burgers,
    item: "Burgers",
  },
  {
    id: "fries",
    component: Fries,
    item: "Fries",
  },
  {
    id: "snacks",
    component: Snacks,
    item: "Snacks",
  },
  {
    id: "salads",
    component: Salads,
    item: "Salads",
  },
  {
    id: "cold-drinks",
    component: ColdDrinks,
    item: "Cold Drinks",
  },
  {
    id: "happy-meal",
    component: HappyMeal,
    item: "Happy Meal",
  },
  {
    id: "desserts",
    component: Desserts,
    item: "Desserts",
  },
  {
    id: "hot-drinks",
    component: HotDrinks,
    item: "Hot Drinks",
  },
  {
    id: "sauces",
    component: Sauces,
    item: "Sauces",
  },
  {
    id: "orbit",
    component: Orbit,
    item: "Orbit",
  },
];

const Restaurants = () => {
  const [activeItem, setActiveItem] = useState<string>("offers");

  const activeMenu = menu.find((item) => item.id === activeItem);

  const ActiveComponent = activeMenu?.component;

  return (
    <div className="flex flex-col justify-center items-center">
      <header className="relative w-[98%] max-w-310 h-120 mx-auto rounded-2xl rounded-bl-none  border border-white/50 my-5 mb-8">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-100"
          style={{
            backgroundImage: `url(${pizzaImage})`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2 p-8 place-content-center justify-center items-center">
          <div className="flex flex-col justify-center h-full gap-y-3">
            <p className="text-gray-300 text-sm">
              Freshly Brewed Coffee & Meals
            </p>

            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              BrewCafe Signature Kitchen
            </h2>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm">
                <IconInvoice size={20} />
                <p>Minimum Order: ₹1,499</p>
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm">
                <IconTruckDelivery size={20} />
                <p>Delivery in 20-25 Minutes</p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-px w-fit flex items-center gap-2 bg-secondary px-5 py-3 rounded-r-xl font-semibold text-gray-900">
              <Clock size={18} />
              Open Until 3:00 AM
            </div>
          </div>

          <div className="relative right-side h-full w-full">
            {/* Review Badge */}
            <div className="absolute -bottom-4 -left-6 z-10 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 px-5 py-4 shadow-2xl">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold text-amber-400">3.4 ★</h3>

                <p className="text-sm font-medium text-gray-300">
                  1,340 Reviews
                </p>
              </div>
            </div>

            {/* Pizza Image */}
            <img
              src={pizzaImage}
              alt="Pizza"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </header>
      <main className="w-full">
        <section className="w-full">
          <div className="flex flex-row justify-between mx-4 my-3 flex-wrap">
            <h2 className="text-2xl font-bold">All Offers from BrewCafe</h2>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
              />

              <input
                type="text"
                placeholder="Search from menu..."
                className="w-full border border-white/50 rounded-full py-2 pl-10 pr-4 outline-none"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="menu flex flex-wrap justify-around gap-5 px-3 py-4 bg-gray-900/70">
            {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`px-4 py-1.5 rounded-full font-semibold transition-all duration-300
          ${
            item.id === activeItem
              ? "bg-white text-gray-900 shadow-md"
              : "text-white/80 hover:text-white"
          }`}
              >
                {item.item}
              </button>
            ))}
          </div>

          <div className="items mt-6">
            {ActiveComponent && <ActiveComponent />}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Restaurants;
