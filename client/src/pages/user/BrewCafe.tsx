import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";
import type { RootState } from "../../app/store";

function BrewCafe() {
  const location = useLocation();
  const from = location.pathname;

  const { isLoading, isAuthenticated, user } = useSelector(
    (state: RootState) => state.user,
  );

  console.log(isAuthenticated);
  console.log(user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={"/cafe/auth/login"} replace state={from} />;
  }

  return <Outlet />;
}

export default BrewCafe;
