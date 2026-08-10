import { Navigate, Route, Routes } from "react-router";

import { Home, Main, Menu, Restaurants } from "./pages/index.ts";
import Signup from "./pages/auth/Signup.tsx";
import Login from "./pages/auth/Login.tsx";
import Admin from "./pages/admin/Admin.tsx";
import AdminProducts from "./pages/admin/AdminProducts.tsx";
import { useEffect } from "react";
import {
  BrewCafe,
  Cart,
  ProductDetails,
  Products,
  Dashboard,
  Orders,
} from "./pages/user/index.ts";
import { useAdminProducts } from "./hooks/useAdminProducts.ts";
import { useDispatch } from "react-redux";
import {
  logoutLocalUser,
  setError,
  setLoading,
  setUser,
} from "./features/user/userSlice.ts";
import { getMe } from "./services/auth.services.ts";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const { refetch } = useAdminProducts();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        dispatch(setLoading(true));
        dispatch(setError(null));

        const user = await getMe();

        dispatch(setUser(user));
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 401) {
          console.log("Unauthorized");
          dispatch(logoutLocalUser());
        } else {
          console.log("Error when fetching User");
          dispatch(
            setError(
              err instanceof Error ? err.message : "Something went Wrong",
            ),
          );
        }
      } finally {
        dispatch(setLoading(false));
      }
    };
    refetch();
    fetchUser();
  }, [dispatch]);

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
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<Orders />} />
      </Route>

      {/* for Users who have Account on BrewCafe */}
      {/* /, /products , /products/:productId */}

      <Route element={<BrewCafe />}>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
