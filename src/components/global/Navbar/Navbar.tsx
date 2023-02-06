import React from "react";

import Styles from "./Navbar.styles";
import { NavbarProps as Props } from "./Navbar.types";

const Navbar: React.FC<Props> = (props) => {
  return (
    <Styles className="Navbar">
      <h1 className="Navbar__title">Fallacy</h1>
    </Styles>
  );
};

Navbar.defaultProps = {};

export default Navbar;
