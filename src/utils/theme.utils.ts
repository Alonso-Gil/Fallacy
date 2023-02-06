// Theme utility functions

import CONSTANTS from "../config/constants";

const { WITH_DARK_MODE } = CONSTANTS.FEATURE_FLAGS;

export const isDarkThemePreferred = async () => {
  if (typeof window === "undefined") return false;
  if (typeof window === "undefined" || !WITH_DARK_MODE) return false;
};

/* Only works for initial values, it doesn't take into consideration
 * local storage preference
 */
export const isDarkThemePreferredSync = () => {
  if (typeof window === "undefined") return false;
  if (typeof window === "undefined" || !WITH_DARK_MODE) return false;

  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};
