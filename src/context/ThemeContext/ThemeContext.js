import { createContext, use } from "react";

export const ThemeContext = createContext();

export const useTheme = () => use(ThemeContext);
