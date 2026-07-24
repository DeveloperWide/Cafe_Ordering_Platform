import { Outlet } from "react-router";
import { Footer, Navbar } from "../../layouts";

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
