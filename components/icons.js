import styled from "styled-components";

import { icons } from "../lib/data";

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Icons = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  p {
    font-size: 20px;
    text-align: center
  }

  a {
    margin-right: 25px;
    &:last-child {
      margin-right: 0px;
    }

    img {
      transition: 300ms;
      filter: invert(86%) sepia(8%) saturate(7323%) hue-rotate(163deg)
        brightness(102%) contrast(97%);
      &:hover {
        filter: invert(0%) sepia(8%) saturate(7460%) hue-rotate(325deg)
          brightness(96%) contrast(99%);
        transform: scale(1.1);
      }
    }
  }
  @media (min-width: 768px) {
  }
`;

export default () => (
  <Icons>
    <Links>
      {icons.map(({ href, src, alt }) => (
        <a href={href} target="_blank" key={alt}>
          <img src={src} alt={alt} width="80px" />
        </a>
      ))}
    </Links>
    <p>Visita nuestras redes y no te pierdas de nada</p>
  </Icons>
);
