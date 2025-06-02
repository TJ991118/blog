import { createContext } from "react";

export const ThemeContext = createContext({
  name: "default",
  mode: "light",
});
