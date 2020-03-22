import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const InfoBanner = styled.div`
  position: absolute;
  background: black;
  color: rgba(97, 219, 251, 1);
  width: 100%;
  h1 {
    margin: 0;
    pointer-events: none;
    padding: 10px 35px;
    width: 100%;
    height: 100%;
    background-image: -webkit-linear-gradient(#020 0%, transparent 25%);
    background-image: linear-gradient(to, transparent 25%);
    background-size: 4px 4px;
    text-shadow: 1px 0px 5px #0f0, -1px 0px 2px #0f0;
    font-family: Ubuntu Mono;
    font-weight: light;
    line-height: 2em;
    font-size: 20px;
  }
  @media (min-width: 768px) {
    top: 50%;
    left: 5%;
    min-width: 600px;
    width: auto;
    h1 {
      font-size: 2.5em;
    }
  }
`;

const SpanComido = styled.span`
  width: 2px;
  display: inline-block;
  background: rgba(97, 219, 251, 1);
  height: 30px;
  margin: -9px 0;
  animation: 700ms ${fadeIn} infinite;
  @media (min-width: 768px) {
    height: 45px;
    margin: -12px 0;
  }
`;

export default ({ current }) => (
  <InfoBanner>
    <h1>
      Reactjs Buenos Aires: {current}
      <SpanComido />
    </h1>
  </InfoBanner>
);
