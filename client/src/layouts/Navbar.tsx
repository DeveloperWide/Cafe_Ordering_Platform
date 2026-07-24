import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="h-18 flex items-center justify-between px-4 md:px-8 lg:px-20">
        {/* Logo */}
        <header className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <h2 className="ml-2 text-xl font-bold">BrewCafe</h2>
        </header>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          <li>
            <NavLink to="/cafe" className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cafe/menu" className="nav-item">
              Browse Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/cafe/restaurants" className="nav-item">
              Restaurants
            </NavLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <Link
          to="/cafe/auth/login"
          className="hidden lg:block bg-[#efb848] px-4 py-2 rounded font-semibold text-gray-900 hover:opacity-90"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <Link
          to="/cafe/auth/login"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t">
          <ul className="flex flex-col p-4 gap-4">
            <li>
              <NavLink to="/cafe" className="nav-item">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cafe/menu" className="nav-item">
                Browse Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/cafe/restaurants" className="nav-item">
                Restaurants
              </NavLink>
            </li>

            <button className="bg-[#efb848] px-4 py-2 rounded font-semibold text-gray-900">
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
