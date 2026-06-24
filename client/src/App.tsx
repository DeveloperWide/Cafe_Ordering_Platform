import { Route, Routes } from "react-router";

import { Home, Main, Menu, Restaurants, TrackOrder } from "./pages/index.ts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Main />} />
        <Route path="menu" element={<Menu />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="track-order" element={<TrackOrder />} />
      </Route>
    </Routes>
  );
}

export default App;
