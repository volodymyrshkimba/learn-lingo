import { useState } from "react";

import { ThemeContext } from "./ThemeContext.js";

import { DEFAULT_THEME_COLOR, THEME_LS_KEY } from "../../constants/ui.js";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(THEME_LS_KEY) || DEFAULT_THEME_COLOR
  );

  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem(THEME_LS_KEY, theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
