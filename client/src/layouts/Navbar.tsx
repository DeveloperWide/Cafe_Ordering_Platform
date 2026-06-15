import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="h-18 flex flex-row items-center justify-between px-20">
      {/* Header */}
      <header className="flex flex-row items-center">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <h2 className="pt-1 ps-2 text-xl">BrewCafe</h2>
      </header>

      {/* Nav Items */}
      <ul className="flex flex-row">
        <li className="nav-item">Home</li>
        <li className="nav-item">Menu</li>
        <li className="nav-item">Track Order</li>
        <li className="nav-item">About</li>
      </ul>

      {/* Button */}
      <button className="bg-[#efb848] rounded cursor-pointer px-4 py-2 text-gray-950 font-bold">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
