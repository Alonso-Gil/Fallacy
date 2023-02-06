import React from "react";

import Styles from "./Footer.styles";
import { FooterProps as Props } from "./Footer.types";

const Footer: React.FC<Props> = (props) => {
  return (
    <Styles className="Footer">
      <h1 className="Footer__title">Fallacy</h1>
    </Styles>
  );
};

Footer.defaultProps = {};

export default Footer;
