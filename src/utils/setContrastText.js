export const setContrastText = (color) =>
  parseInt(color.slice(1), 16) > 0xffffff / 2 ? "#334566" : "#FFFFFF";
