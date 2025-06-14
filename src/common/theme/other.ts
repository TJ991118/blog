function jsTransCssVar(styleObj: Record<string, any>, prefix: string) {
  return Object.entries(styleObj)
    .map(([key, value]) => {
      return `--${prefix}-${key}: ${value};`;
    })
    .join(' ');
}


function injectStyle(css: string, styleId: string) {
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    :root {
      ${css}
    }
  `;
  if (styleId) {
    styleTag.id = styleId;
  }
  document.head.appendChild(styleTag);
}


/**
 * @desc Gen other style property object
 */
export function GenOther(other: Record<string, any>) {
  const otherStyle = Object.entries(other).reduce((pre, color) => {
    const [key, value] = color;
    const itemStyle = Object.entries(value).reduce((style, item) => {
      const [itemKey, itemValue] = item;
      style[`${key}-${itemKey}`] = itemValue;
      return style;
    }, {} as Record<string, any>);
    return pre + " " + jsTransCssVar(itemStyle, "abbes");
  }, "");
  console.log(otherStyle)
  injectStyle(otherStyle, "other")
}