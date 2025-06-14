"use client";
import { createContext, useEffect, useState } from "react";

import defaultTheme from "@/styles/theme/theme.json";
import { GenPalette } from "./palette";
import { GenOther } from "./other";

const { palette: PALETTE, ...OTHER }  = defaultTheme

function getSaveMode(): "system" | "light" | "dark" {
  const storageInfo = localStorage.getItem("theme")
  const savedTheme = storageInfo !== null ? JSON.parse(storageInfo) : null
  return savedTheme?.mode ?? "system"
}

export const ThemeContext = createContext({
  name: "default",
  mode: "light",
  setMode: (mode: "system" | "light" | "dark") => { console.log("current mode: ", mode) }
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChangeMedia = (e?: MediaQueryListEvent) => {
      const savedMode = getSaveMode()
      const isDark = e ? e.matches : mediaQuery.matches;
      const perferMode = isDark ? "dark" : "light";
      if (savedMode === "system") {
        document.documentElement.setAttribute("data-theme-mode", perferMode);
        setMode(perferMode);
      }
    };

    handleChangeMedia();
    mediaQuery.addEventListener("change", handleChangeMedia);

    GenOther(OTHER)

    return () => {
      mediaQuery.removeEventListener("change", handleChangeMedia);
    };
  }, []);

  useEffect(() => {
    GenPalette(PALETTE, mode)
  }, [mode])


  return (
    <ThemeContext.Provider
      value={{
        name: "default",
        mode: mode,
        setMode: (mode: "system" | "light" | "dark") => {
          localStorage.setItem("theme", JSON.stringify({
            name: "default",
            mode: mode
          }))
          if (mode !== "system") {
            setMode(mode)
          }
        }
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
