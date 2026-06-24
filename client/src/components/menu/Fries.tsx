import { fries } from "../../data/MenuItems";
import { ProductCard } from "../cards";

const Fries = () => {
  return (
    <div>
      <h2 className="text-secondary font-bold px-5 py-4 text-3xl">Fries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 my-4 mx-5">
        {fries.map((obj) => {
          return (
            <ProductCard
              title={obj.title}
              description={obj.description}
              imageUrl={obj.imageUrl}
              price={obj.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Fries;
