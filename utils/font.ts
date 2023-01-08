export const getFontColor = (color = "text-black") => {
  const fontColorMap = {
    "#94A3B8": "slate-400",
    "#475569": "slate-200",
    "#4C1D95": "violet-900",
    "#7C3AED": "violet-600",
  };
  return `${fontColorMap[color] || ""}`;
};
