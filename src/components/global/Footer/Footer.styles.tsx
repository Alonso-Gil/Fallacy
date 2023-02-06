import styled from "styled-components";

import { FooterStyledProps as Props } from "./Footer.types";

const FooterStyled = styled.div<Props>`
  background-color: var(--palette-primary-black);
  padding: 1.8rem 4.5rem;
  padding-bottom: 3rem;

  .Footer {
    &__title {
      color: var(--palette-white);
      font-size: 2.8rem;
      font-weight: 600;
    }
  }
`;

export default FooterStyled;
