import { MoveRight } from "lucide-react";
import heroImage from "../../assets/hero.png";
import DownloadAppImage from "../../assets/downloadApp.png";
import DownloadAppLogo from "../../assets/DownloadAppImage.png";
import { useState } from "react";
import {
  FAQ,
  WhoWeAre,
  PartnerProgram,
  HelpSupport,
} from "../../components/tabs/index.ts";
import { cafes, categories, stats, tabs } from "../../data/Main";
import {
  CafeCard,
  PartnerWithUs,
  CategoryCard,
} from "../../components/cards/index.ts";

const Main = () => {
  const [activeTab, setActiveTabs] = useState<string>("faq");

  return (
    <div className="flex flex-col justify-center items-center">
      <header
        className="bg-cover bg-center flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12
             w-[95%] max-w-300
             h-75 sm:h-87.5 md:h-112.5 lg:h-125
             rounded-2xl mx-auto"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="max-w-xl flex flex-col gap-3">
          <h1 className="flex flex-col gap-1 sm:gap-2 font-bold text-3xl sm:text-4xl md:text-5xl text-amber-50">
            <span>Delicious Coffee</span>
            <span>delivered to you</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white max-w-md">
            Order your favorite meals & drinks from{" "}
            <span className="font-semibold text-[#b08ee0]">BrewCafe</span>.
          </p>

          <button
            className="flex items-center justify-center gap-2
                 w-fit px-4 py-2
                 bg-secondary text-gray-950
                 font-bold rounded
                 hover:cursor-pointer"
          >
            Order Now
            <MoveRight size={18} />
          </button>
        </div>
      </header>
      <main className="bg-cover flex flex-col w-screen ps-5 mx-3 me-5 my-5">
        <section>
          <h2 className="text-2xl font-bold text-text py-3">
            Up to 40% 🎉 BrewCafe exclusive deals
          </h2>
          <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 my-3 mx-2">
            {/* Cafe Cards */}
            {cafes.map((cafe) => {
              return (
                <CafeCard
                  backgroundImage={`${cafe.backgroundImage}`}
                  title={`${cafe.title}`}
                  discount={cafe.discount}
                />
              );
            })}
          </div>
        </section>
        <section className="my-3">
          <h2 className="text-2xl font-bold text-text py-3">
            BrewCafe Popular Categories ☕
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mx-3 my-2">
            {categories.map((category) => {
              return (
                <CategoryCard
                  title={category.title}
                  backgroundImage={category.backgroundImage}
                />
              );
            })}
          </div>
        </section>
        <section className="w-full flex justify-center py-16 px-4">
          <div className="max-w-6xl w-full rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center">
            {/* Left Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={DownloadAppImage}
                alt="Download App"
                className="h-112.5 object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 p-10">
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                📱 Mobile App
              </span>

              <h2 className="text-5xl font-bold text-white mt-5 leading-tight">
                Ordering Coffee Has Never Been
                <span className="text-secondary block">Faster & Smarter</span>
              </h2>

              <p className="text-gray-400 mt-5 text-lg max-w-md">
                Skip the queue and order your favorite coffee in seconds.
                Personalized recommendations, instant checkout and real-time
                order tracking.
              </p>
              {/* Store Buttons */}
              <div className="mt-8">
                <img
                  src={DownloadAppLogo}
                  alt="Store Buttons"
                  className="w-72 hover:scale-105 transition"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 py-2 justify-center">
          <PartnerWithUs
            backgroundImage="https://i.pinimg.com/1200x/cf/83/2c/cf832c4acc6260622273deec59f78599.jpg"
            title="Signup as a business"
            heading="Partner With Us"
            headerText="Earn More with lower fees"
            redirectLink="#"
          />
          <PartnerWithUs
            backgroundImage="https://i.pinimg.com/736x/35/db/8f/35db8f9caac0a518598bc1b25b7c53b7.jpg"
            title="Signup as a rider"
            heading="Ride With Us"
            headerText="Avail exclusive perks"
            redirectLink="#"
          />
        </section>
        <section>
          <div className="px-3 py-2 grid grid-cols-1 md:grid-cols-2">
            <h2 className="font-semibold text-2xl my-3">Know More About us!</h2>
            <ul className="flex justify-between px-2 gap-3">
              {tabs.map((obj) => {
                return (
                  <button
                    key={obj.id}
                    className={`about_us_section_link ${activeTab == obj.id ? "border border-secondary rounded-full" : ""}`}
                    onClick={() => setActiveTabs(obj.id)}
                  >
                    {obj.label}
                  </button>
                );
              })}
            </ul>
          </div>
          <div className="bg-gray-900/50 ms-5 me-8 rounded-xl shadow-md p-8">
            {activeTab === "faq" && <FAQ />}
            {activeTab === "who" && <WhoWeAre />}
            {activeTab === "partner" && <PartnerProgram />}
            {activeTab === "support" && <HelpSupport />}
          </div>
        </section>
        <section>
          <div className="proof_card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`p-6 transition-all duration-300 ease-in-out hover:cursor-pointer ${
                  index % 2 === 0
                    ? "bg-gray-900/30 text-white hover:bg-gray-900/70 "
                    : "bg-white/80 text-gray-900 hover:bg-white"
                }`}
              >
                <h2 className="count">{item.count}</h2>
                <p className="title">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
