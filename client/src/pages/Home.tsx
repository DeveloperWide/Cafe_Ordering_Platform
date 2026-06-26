import { Outlet } from "react-router";
import { Navbar, Footer } from "../layouts/index.ts";

const Home = () => {
  return (
    <div className="overflow-x-hidden relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
