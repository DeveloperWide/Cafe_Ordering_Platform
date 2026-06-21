import { Outlet } from "react-router";
import { Navbar, Footer } from "../layouts/index.ts";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
