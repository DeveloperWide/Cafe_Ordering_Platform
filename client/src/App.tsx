import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Ordering from "./pages/Ordering";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/order" element={<Ordering />} />
    </Routes>
  );
}

export default App;
