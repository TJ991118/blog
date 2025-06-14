import { applyTheme, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";

/**
 * @desc Gnerate the theme form the source color
 */
export function GenPalette(palette: { source: string }, mode: "light" | "dark") {
  const source = palette.source
  const theme = themeFromSourceColor(argbFromHex(source));
  const isDark = mode === "dark"
  applyTheme(theme, { target: document.body, dark: isDark, prefix: 'abbes' });
}