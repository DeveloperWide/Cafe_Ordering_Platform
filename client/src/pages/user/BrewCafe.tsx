import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import type { RootState } from "../../app/store";

function BrewCafe() {
  const { isLoading, isAuthenticated } = useSelector(
    (state: RootState) => state.user,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={"/cafe/auth/signup"} replace />;
  }

  return <Outlet />;
}

export default BrewCafe;
