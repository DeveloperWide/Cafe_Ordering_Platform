import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { ThemeType } from "./theme";
import { theme } from "./theme";

const ThemeContext = createContext<ThemeType | undefined>(undefined);

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must used within CustomThemeProvider");
  }

  return context;
};
