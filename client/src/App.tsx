import { Route, Routes } from "react-router";

import { Home, Main, Menu, Restaurants, TrackOrder } from "./pages/index.ts";
import Signup from "./pages/auth/Signup.tsx";
import Login from "./pages/auth/Login.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Main />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="menu" element={<Menu />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="track-order" element={<TrackOrder />} />
      </Route>
    </Routes>
  );
}

export default App;
