import { css } from "styled-components";

const animations = css`
  @keyframes shine {
    0% {
      transform: rotateZ(-45deg) translateX(-150%);
    }
    100% {
      transform: rotateZ(30deg) translateX(2000%);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  @keyframes load {
    from {
      left: -15rem;
    }
    to {
      left: 100%;
    }
  }
`;

export default animations;
