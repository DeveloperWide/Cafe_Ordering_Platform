import { MoveRight } from "lucide-react";
import heroImage from "../assets/hero.png";
import CafeCard from "../components/cards/CafeCard";
import DownloadAppImage from "../assets/downloadApp.png";
import DownloadAppLogo from "../assets/DownloadAppImage.png";
import CategoryCard from "../components/cards/CategoryCard";
import PartnerWithUs from "../components/cards/PartnerWithUs";

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
      <main className="bg-cover flex flex-col w-screen ps-5 mx-3 me-5 my-5">
        <section>
          <h2 className="text-2xl font-bold text-text py-3">
            Up to 40% 🎉 BrewCafe exclusive deals
          </h2>
          <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 my-3 mx-2">
            {/* Cafe Cards */}
            <CafeCard
              backgroundImage="https://i.pinimg.com/1200x/9e/56/0c/9e560cdb73ae2abfd80577e093f8335b.jpg"
              title="AMA Cafe | Rajpur Road"
              discount={40}
            />
            <CafeCard
              backgroundImage="https://i.pinimg.com/1200x/f4/b4/68/f4b468c720a97521602be6095de1abec.jpg"
              title="Farzi Café Dehradun"
              discount={20}
            />
            <CafeCard
              backgroundImage="https://i.pinimg.com/736x/6f/e1/11/6fe111d94ca6ab10e81c9bd96328a82d.jpg"
              title="Café De Piccolo"
              discount={17}
            />
          </div>
        </section>
        <section className="my-3">
          <h2 className="text-2xl font-bold text-text py-3">
            BrewCafe Popular Categories ☕
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 mx-3 my-2">
            <CategoryCard
              title="Espresso-Based Coffees"
              backgroundImage="https://i.pinimg.com/1200x/e8/8c/96/e88c963b93c4ee2f3481b3576e2c9395.jpg"
            />
            <CategoryCard
              title="Brewed Coffees"
              backgroundImage="https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg"
            />
            <CategoryCard
              title="Cold Coffees"
              backgroundImage="https://i.pinimg.com/1200x/40/67/01/4067010339fb0ee75c9631551f30576a.jpg"
            />
            <CategoryCard
              title="Specialty & Flavored"
              backgroundImage="https://i.pinimg.com/736x/c4/73/7e/c4737e013a673e196416210867f9b1f8.jpg"
            />
            <CategoryCard
              title="Milk-Based & Alternative"
              backgroundImage="https://i.pinimg.com/1200x/b1/8d/50/b18d50fa62686644792732a3f609275f.jpg"
            />
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
      </main>
    </div>
  );
};

export default Main;
