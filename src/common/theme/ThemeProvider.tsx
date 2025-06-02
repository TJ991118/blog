"use client";
import { useEffect, useState } from "react";
import { GenStyleByTheme, InjectTheme } from "@zidian/web-theme";

import defaultTheme from "@/styles/theme/theme.json";
import { ThemeContext } from "./context";

/**
 * @desc Create theme variable and inject theme obj to css
 */
export const setTheme = (p0?: any) => {
  const colorStep = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const themeObj = GenStyleByTheme(defaultTheme, colorStep);
  InjectTheme(themeObj, "abbes");
  return themeObj;
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme();
    const savedTheme = localStorage.getItem("theme");
    const savedMode = savedTheme
      ? JSON.parse(savedTheme)
        ? JSON.parse(savedTheme).mode
        : "system"
      : "system";

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChangeMedia = (e?: MediaQueryListEvent) => {
      const isDark = e ? e.matches : mediaQuery.matches;
      const perferMode = isDark ? "dark" : "light";
      if (savedMode === "system" || !savedMode) {
        setMode(perferMode);
        document.documentElement.setAttribute("data-theme-mode", perferMode);
      } else {
        setMode(savedMode);
        document.documentElement.setAttribute("data-theme-mode", savedMode);
      }
    };
    handleChangeMedia();
    mediaQuery.addEventListener("change", handleChangeMedia);
    return () => {
      mediaQuery.removeEventListener("change", handleChangeMedia);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        name: "default",
        mode: mode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
