import React from "react";
import ThemeProvider from "./ThemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Themed App</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
