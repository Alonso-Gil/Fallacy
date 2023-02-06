import React, { memo } from "react";
import Head from "next/head";

import Styles from "./Layout.styles";
import { LayoutProps as Props } from "./Layout.types";

const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Styles className="Layout">
      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <script defer />
        <title>FALLACY</title>
      </Head>
      {children}
    </Styles>
  );
};

Layout.defaultProps = {};

export default memo(Layout);
