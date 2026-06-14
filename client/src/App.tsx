import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Ordering from "./pages/Ordering";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Main />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="order" element={<Ordering />} />
      </Route>
    </Routes>
  );
}

export default App;
