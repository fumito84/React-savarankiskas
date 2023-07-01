import React, { createContext, useState } from "react";

const Context = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export { ThemeProvider, Context };