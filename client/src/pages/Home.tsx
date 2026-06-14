import { Outlet } from "react-router";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
