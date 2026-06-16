import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import Restaurants from "./pages/Restaurants";
import TrackOrder from "./pages/TrackOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Main />} />
        <Route path="menu" element={<Menu />} />
        <Route path="offers" element={<Offers />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="track-order" element={<TrackOrder />} />
      </Route>
    </Routes>
  );
}

export default App;
