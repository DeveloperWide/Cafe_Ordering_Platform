import { MoveRight } from "lucide-react";
import heroImage from "../assets/hero.png";
import CafeCard from "../components/cards/CafeCard";
import CategoryCard from "../components/cards/CategoryCard";

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
          <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mx-3 my-2">
            <CategoryCard
              backgroundImage="https://i.pinimg.com/1200x/e8/8c/96/e88c963b93c4ee2f3481b3576e2c9395.jpg"
              title="Espresso Based"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg"
              title="Brewed Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/1200x/40/67/01/4067010339fb0ee75c9631551f30576a.jpg"
              title="Cold Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/736x/c4/73/7e/c4737e013a673e196416210867f9b1f8.jpg"
              title="Flavored Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/1200x/b1/8d/50/b18d50fa62686644792732a3f609275f.jpg"
              title="Dessert Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/736x/21/74/32/2174329b8ef1603c1cbc68bd9ef5865a.jpg"
              title="Specialty Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/736x/02/77/d6/0277d6e9c205f847443783574697a0db.jpg"
              title="Decaf Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/736x/ff/4d/98/ff4d98fd50925814a15d3dcb761613be.jpg"
              title="Signature Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/736x/04/c3/c8/04c3c8470a92b392c9f30b1130634651.jpg"
              title="Seasonal Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/736x/f8/38/17/f83817560f3c6cc3c9b311ad82517daf.jpg"
              title="Milk-Based Coffee"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
