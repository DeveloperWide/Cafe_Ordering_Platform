import { useDispatch } from "react-redux";
import { loginUser, signupUser, logoutUser } from "../services/auth.services";
import {
  setError,
  setLoading,
  setUser,
  logoutLocalUser,
} from "../features/user/userSlice";
import type { Response } from "../types/auth.types";
import type { User } from "../types/user.types";
import { useLocation, useNavigate } from "react-router";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectionPath = location?.state;

  const login = async (email: string, password: string) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const data: Response | null = await loginUser(email, password);

      const user = data?.user as User;

      dispatch(setUser(user));

      return redirectionPath
        ? navigate(`${redirectionPath}`)
        : navigate("/products");
    } catch (err) {
      dispatch(
        setError(err instanceof Error ? err.message : "Something went Wrong"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const data: Response | null = await signupUser(name, email, password);

      const user = data?.user as User;

      dispatch(setUser(user));
      return redirectionPath
        ? navigate(`${redirectionPath}`)
        : navigate("/products");
    } catch (err) {
      dispatch(
        setError(err instanceof Error ? err.message : "Something went Wrong"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const logout = async () => {
    try {
      const data = await logoutUser();
      console.log(data);

      dispatch(logoutLocalUser());
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(logoutLocalUser());
    }
  };

  return { login, signup, logout };
};
