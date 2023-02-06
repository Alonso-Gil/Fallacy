import React, { createContext, useEffect, useMemo, useState } from "react";
import { ContextDevTool } from "react-context-devtool";
import { ThemeProvider as ThemeProviderLib } from "styled-components";

import { ThemeProviderProps as Props } from "./theme.context.types";
import { ThemeProviderValue } from "./theme.context.types";
import GlobalStyles from "../../styles/base";
import themes from "../../styles/theme";
import { isDarkThemePreferred } from "../../utils/theme.utils";
import { isDarkThemePreferredSync } from "../../utils/theme.utils";

import CONSTANTS from "../../config/constants";

const { WITH_DARK_MODE } = CONSTANTS.FEATURE_FLAGS;

// @ts-ignore
export const ThemeContext = createContext<ThemeProviderValue>({});

const ThemeProvider: React.FC<Props> = (props) => {
  const { theme } = props;
  const { light, dark } = themes;
  const initialTheme =
    isDarkThemePreferredSync() && WITH_DARK_MODE ? dark : light;
  const [selectedTheme, setSelectedTheme] = useState(theme ?? initialTheme);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const themeChangeHandler = (e: MediaQueryListEvent) => {
      setSelectedTheme(e.matches && WITH_DARK_MODE ? dark : light);
    };
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", themeChangeHandler);

    return () => matchMedia.removeEventListener("change", themeChangeHandler);
  }, [light, dark]);

  useEffect(() => {
    (async () => {
      const isDark = await isDarkThemePreferred();
      const initialTheme = isDark && WITH_DARK_MODE ? dark : light;
      setSelectedTheme(theme ?? initialTheme);
    })();
  }, [light, dark, theme]);

  const value: ThemeProviderValue = useMemo(() => {
    return {
      selectedTheme,
      setSelectedTheme,
    };
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <GlobalStyles theme={selectedTheme} />
      <ThemeProviderLib theme={selectedTheme}>
        <ContextDevTool context={ThemeContext} id="theme" displayName="Theme" />
        {props.children}
      </ThemeProviderLib>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
