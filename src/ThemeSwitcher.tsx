import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeSwitcher: React.FC = () => {
  const themeManager = useTheme();

  const handleSwitchTheme = () => {
    const currentTheme = themeManager.getTheme();
    const newTheme = {
      backgroundColor:
        currentTheme.backgroundColor === "white" ? "black" : "white",
      color: currentTheme.color === "black" ? "white" : "black",
    };
    themeManager.setTheme(newTheme);
  };

  return <button onClick={handleSwitchTheme}>Switch Theme</button>;
};

export default ThemeSwitcher;
