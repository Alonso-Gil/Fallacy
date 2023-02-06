import styled from "styled-components";

import { NavbarStyledProps as Props } from "./Navbar.types";

const NavbarStyled = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  background-color: var(--palette-primary-medium);
  height: var(--sizes-navbar-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.4rem 0.4rem var(--palette-gray-s0-l85);

  .Navbar {
    &__title {
      color: var(--palette-white);
      font-size: 2.8rem;
      font-weight: 600;
    }
  }
`;

export default NavbarStyled;
