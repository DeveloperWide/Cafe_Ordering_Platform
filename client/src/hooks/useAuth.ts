import { useDispatch } from "react-redux";
import { loginUser, signupUser } from "../services/auth.services";
import { setError, setLoading, setUser } from "../features/user/userSlice";
import type { Response } from "../types/auth.types";
import type { User } from "../types/user.types";

export const useAuth = () => {
  const dispatch = useDispatch();

  const login = async (email: string, password: string) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const data: Response | null = await loginUser(email, password);

      const user = data?.user as User;

      dispatch(setUser(user));
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
    } catch (err) {
      dispatch(
        setError(err instanceof Error ? err.message : "Something went Wrong"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { login, signup };
};
