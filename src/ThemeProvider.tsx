import { createContext, ReactNode, useContext, useEffect } from "react";
import ThemeManager from "./ThemeManager";

const ThemeContext = createContext(ThemeManager.getInstance());

interface Props {
  children: ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const themeManager = ThemeManager.getInstance();

  useEffect(() => {
    themeManager.setTheme(themeManager.getTheme());
  }, [themeManager]);

  return (
    <ThemeContext.Provider value={themeManager}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
