import styled from "styled-components";

import { useScroll } from "../hooks/useScroll";

const BannerParallax = styled.div`
  background-image: url("/static/comunidad.jpg");
  background-position: ${({ scrollY }) => `center ${50 + scrollY * 0.029}%`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;
  @media (min-width: 768px) {
    padding-bottom: 40%;
    height: 0;
  }
`;

const Glass = styled.div`
  background: radial-gradient(black 15%, transparent 5%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 5%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 5%) 8px 9px;
  background-size: 3px 3px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default ({ children }) => {
  const { scrollY } = useScroll();
  return (
    <BannerParallax scrollY={scrollY}>
      <Glass />
      {children}
    </BannerParallax>
  );
};
