import pizzaImage from "../assets/pizza.jpg";
import { IconInvoice, IconTruckDelivery } from "@tabler/icons-react";
import { Clock, Clock3, MapPinIcon, PhoneCall } from "lucide-react";
import { useState } from "react";
import { menu, timings } from "../data/Restaurant";

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
        <section>
          <div className="md:flex md:flex-row md:justify-center">
            <div className="menu flex flex-wrap justify-around md:max-w-3xl md:justify-center md:rounded-3xl md:gap-x-4  gap-5 px-3 py-4 bg-gray-900/70">
              {menu.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`px-4 py-1.5 rounded-full transition-all duration-300
          ${
            item.id === activeItem
              ? "bg-white font-semibold text-gray-900 shadow-md"
              : "text-white/80 hover:text-white"
          }`}
                >
                  {item.item}
                </button>
              ))}
            </div>
          </div>

          <div className="items mt-6">
            {ActiveComponent && <ActiveComponent />}
          </div>
        </section>
        <div className="w-full my-10 flex flex-col justify-center items-center">
          <hr className="w-full border border-white/15 rounded-full max-w-4xl" />
        </div>
        <section className="my-12 mx-10 overflow-hidden rounded-3xl shadow-xl bg-gray-900/70">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Delivery */}
            <div className="p-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                <MapPinIcon className="text-secondary" />
                Delivery Information
              </h2>

              <div className="mt-6 space-y-3 text-white">
                {timings.map((timing) => (
                  <p key={timing.id}>
                    <span className="font-semibold">{timing.day}</span>{" "}
                    {timing.time}
                  </p>
                ))}

                <p className="pt-4">
                  <span className="font-semibold">Estimated Delivery:</span>{" "}
                  20-25 Minutes
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="border-y lg:border-y-0 lg:border-x border-white/15 p-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                <PhoneCall className="text-secondary" />
                Contact Information
              </h2>

              <div className="mt-6 space-y-4 text-white">
                <p>
                  For allergies or dietary requirements, please contact BrewCafe
                  before placing your order.
                </p>

                <div>
                  <p className="font-semibold">Phone Number</p>

                  <a
                    href="tel:+919876543210"
                    className="text-secondary hover:underline"
                  >
                    +91 98765 43210
                  </a>
                </div>

                <div>
                  <p className="font-semibold">Website</p>

                  <a
                    href="https://brewcafe.com"
                    className="text-secondary hover:underline"
                  >
                    www.brewcafe.com
                  </a>
                </div>
              </div>
            </div>

            {/* Timing */}
            <div className="bg-gray-950 text-white p-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <Clock3 className="text-secondary" />
                Operational Hours
              </h2>

              <div className="mt-6 space-y-3">
                {timings.map((timing) => (
                  <p key={timing.id}>
                    <span className="font-semibold">{timing.day}</span>{" "}
                    {timing.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Restaurants;
