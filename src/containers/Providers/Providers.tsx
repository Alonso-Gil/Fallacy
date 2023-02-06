import React, { useRef } from "react";

import { ProvidersProps as Props } from "./Providers.types";
import ThemeProvider from "../../contexts/theme/theme.context";

const Providers: React.FC<Props> = (props) => {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
};

Providers.defaultProps = {};

export default Providers;
