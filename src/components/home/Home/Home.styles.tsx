import styled from "styled-components";

import { HomeStyledProps as Props } from "./Home.types";

const HomeStyled = styled.div<Props>`
  min-width: var(--sizes-page-minWidth);
  max-width: var(--sizes-page-maxWidth);
  min-height: var(--sizes-page-minHeight);
  background-color: var(--palette-primary-white);
  display: grid;
  grid-template-columns: var(--sizes-page-columns);
  grid-template-rows: max-content 1fr max-content;

  .Home {
    &__header {
      grid-column: fullBleed;
    }

    &__main {
      grid-column: content;
    }

    &__boxContainer {
      margin-top: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }

    &__box {
      width: 12rem;
      height: 12rem;
      background-color: white;
      border-radius: 1rem;
      cursor: pointer;
      box-shadow: 0 1rem 5rem var(--palette-gray-s0-l70);

      &--active {
        background-color: var;
      }
    }

    &__footer {
      grid-column: fullBleed;
      padding-top: 3.2rem;
    }
  }
`;

export default HomeStyled;
