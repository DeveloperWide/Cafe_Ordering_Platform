import {
  Coffee,
  LayoutDashboard,
  Package,
  Receipt,
  Settings,
  ShoppingCart,
  Users,
  LogOut,
  ShoppingBasket,
} from "lucide-react";
import { NavLink } from "react-router";

const sidebarLinks = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    title: "Products",
    icon: ShoppingBasket,
    path: "/admin/products",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    path: "/admin/orders",
  },
  {
    title: "Menu",
    icon: Coffee,
    path: "/admin/menu",
  },
  {
    title: "Inventory",
    icon: Package,
    path: "/admin/inventory",
  },
  {
    title: "Customers",
    icon: Users,
    path: "/admin/customers",
  },
  {
    title: "Transactions",
    icon: Receipt,
    path: "/admin/transactions",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-[#1E1B18]">
      {/* Logo */}
      <div className="border-b border-white/10 px-6 py-7">
        <h1 className="text-2xl font-bold text-amber-400">BrewCafe</h1>

        <p className="mt-1 text-sm text-gray-400">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {sidebarLinks.map(({ title, icon: Icon, path }) => (
          <NavLink
            key={title}
            to={path}
            end={path === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200
              ${
                isActive
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-300 hover:bg-[#322D29] hover:text-white hover:translate-x-1"
              }`
            }
          >
            <Icon size={20} />

            <span className="font-medium">{title}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Section */}
      <div className="border-t border-white/10 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 font-bold text-black">
            A
          </div>

          <div className="flex-1">
            <h4 className="font-semibold">Admin</h4>

            <p className="text-sm text-gray-400">Cafe Manager</p>
          </div>

          <button className="rounded-lg p-2 text-gray-400 transition hover:bg-[#322D29] hover:text-red-400">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
