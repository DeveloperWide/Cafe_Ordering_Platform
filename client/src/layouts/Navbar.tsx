import { NavLink } from "react-router";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 shadow-sm h-18 flex items-center justify-between px-20">
      <header className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <h2 className="ml-2 text-xl font-bold">BrewCafe</h2>
      </header>

      <ul className="flex items-center gap-6">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className="nav-item">
            Browse Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/offers" className="nav-item">
            Special Offers
          </NavLink>
        </li>
        <li>
          <NavLink to="/restaurants" className="nav-item">
            Restaurants
          </NavLink>
        </li>
        <li>
          <NavLink to="/track-order" className="nav-item">
            Track Order
          </NavLink>
        </li>
      </ul>

      <button className="bg-[#efb848] px-4 py-2 rounded font-semibold text-gray-900 hover:opacity-90">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
