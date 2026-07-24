import { Route, Routes } from "react-router";

import { Home, Main, Menu, Restaurants, TrackOrder } from "./pages/index.ts";
import Signup from "./pages/auth/Signup.tsx";
import Login from "./pages/auth/Login.tsx";
import Admin from "./pages/admin/Admin.tsx";
import Products from "./pages/admin/Products.tsx";
import Orders from "./pages/admin/Orders.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import ShowProduct from "./pages/product/ShowProduct.tsx";
import Cart from "./pages/user/Cart.tsx";
import Wishlist from "./pages/user/Wishlist.tsx";

function App() {
  return (
    <Routes>
      {/* for Users who doesn't have account on brewCafe */}

      {/* /cafe/ */}
      <Route path="/cafe" element={<Home />}>
        <Route index element={<Main />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="menu" element={<Menu />} />
        <Route path="restaurants" element={<Restaurants />} />
      </Route>

      {/* ADMIN Pages/Routes */}
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
      </Route>

      {/* for Users who have Account on BrewCafe */}
      {/* /, /products , /products/:productId */}
      <Route path="/" element={<Products />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<Products />} />
        <Route path={`products/:id`} element={<ShowProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
