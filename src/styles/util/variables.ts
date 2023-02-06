const palette = {
  empty: "", // Fixes a bug with styled components that appends a coma
  "primary-light": "#BF1120",
  "primary-medium": "#730202",
  "primary-dark": "#400101",
  "primary-white": "#D5D5D5",
  "primary-black": "#0D0D0D",
  "black-hex": "#000000",
  black: "hsla(0, 0%, 0%, 1)",
  "black-s0-l10": "hsla(0, 0%, 10%, 1)",
  "black-s0-l15": "hsla(0, 0%, 15%, 1)",
  "gray-s0-l20-a04": "hsla(0, 0%, 20%, 0.04)",
  "gray-s0-l20-a08": "hsla(0, 0%, 20%, 0.08)",
  "gray-s0-l20-a16": "hsla(0, 0%, 20%, 0.16)",
  "gray-s0-l20-a20": "hsla(0, 0%, 20%, 0.20)",
  "gray-s0-l20-a70": "hsla(0, 0%, 20%, 0.70)",
  "gray-s0-l20": "hsla(0, 0%, 20%, 1)",
  "gray-s0-l30": "hsla(0, 0%, 30%, 1)",
  "gray-s0-l35": "hsla(0, 0%, 35%, 1)",
  "gray-s0-l40-a40": "hsla(0, 0%, 40%, 0.4)",
  "gray-s0-l40": "hsla(0, 0%, 40%, 1)",
  "gray-s0-l70-a48": "hsla(0, 0%, 70%, 0.48)",
  "gray-s0-l50": "hsla(0, 0%, 50%, 1)",
  "gray-s0-l70": "hsla(0, 0%, 70%, 1)",
  "gray-s0-l75": "hsla(0, 0%, 75%, 1)",
  "gray-s0-l80": "hsla(0, 0%, 80%, 1)",
  "gray-s0-l85": "hsla(0, 0%, 85%, 1)",
  "gray-s0-l90": "hsla(0, 0%, 90%, 1)",
  "gray-s0-l92": "hsla(0, 0%, 92%, 1)",
  "gray-s0-l95": "hsla(0, 0%, 95%, 1)",
  "gray-s0-l97": "hsla(0, 0%, 97%, 1)",
  // This variable is for capacitor use only, it represents the white color.
  "white-hex": "#ffffff",
  white: "hsla(0, 0%, 100%, 1)",
  text: {
    primary: "var(--palette-primary)",
    white: "var(--palette-white)",
  },
};

const fonts = {
  primary: "'Montserrat', sans-serif",
};

export const columns = 12;

export const columnsMaxTotalWidth = "120rem";

export const gridMinMargin = "0.8rem";

export const gridTotalMinMargin = `calc(${gridMinMargin} * 2)`;

export const gridMargin = `minmax(${gridMinMargin}, 1fr)`;

export const columnsTotalWidth = `calc(100% - ${gridTotalMinMargin})`;

export const columnMaxWidth = `calc(${columnsMaxTotalWidth} / ${columns})`;

export const columnWidth = `minmax(0, min(calc(${columnsTotalWidth} / ${columns}), ${columnMaxWidth}))`;

const sizes = {
  page: {
    minWidth:
      "calc(100vw - (100vw - 100%) - env(safe-area-inset-left) - env(safe-area-inset-right))",
    maxWidth:
      "calc(100vw - (100vw - 100%) - env(safe-area-inset-left) - env(safe-area-inset-right))",
    minHeight:
      "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
    maxHeight:
      "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
    columns: `[fullBleed-start] ${gridMargin} [content-start] repeat(${columns}, ${columnWidth}) [content-end] ${gridMargin} [fullBleed-end]`,
  },
  navbar: {
    height: "calc(8rem + env(safe-area-inset-top))",
    "height-mobile": "calc(10.8rem + env(safe-area-inset-top))",
    "height-mobile-without-search": "calc(5.8rem + env(safe-area-inset-top))",
  },
};

const variables = { palette, fonts, sizes };

export default variables;
