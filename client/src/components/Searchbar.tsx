import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <section className="w-full">
      <div className="flex flex-row justify-center items-center mx-4 my-3">
        <div className="relative w-[90%] md:w-[70%]">
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
  );
};

export default Searchbar;
