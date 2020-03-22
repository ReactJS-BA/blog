import HeaderComponent from "../components/header";
import styled, { keyframes } from "styled-components";

import { useScroll } from "../hooks/useScroll";
import { useState, useEffect } from "react";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const BannerParallax = styled.div`
  background-image: url("/static/comunidad.jpg");
  background-position: ${({ scrollY }) => `center ${50 + scrollY * 0.029}%`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 0;
  overflow: hidden;
  padding-bottom: 40%;
  position: relative;
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

const InfoBanner = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  background: black;
  color: rgba(97, 219, 251, 1);

  min-width: 600px;
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
    font-size: 2.5em;
  }
`;

const SpanComido = styled.span`
  width: 2px;
  display: inline-block;
  background: rgba(97, 219, 251, 1);
  height: 45px;
  margin: -12px 0;
  animation: 700ms ${fadeIn} infinite;
`;

const Links = styled.div``;

const Icons = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  ${Links} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 20px;
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
`;

const About = styled.div`
  width: 100%;
  text-align: center;
  background-color: #999;
  padding-bottom: 40px;
  button {
    width: 100%;
    max-width: 320px;
    height: 35px;
    border-radius: 8px;
    font-size: 16px;
  }
  h2 {
    font-size: 3em;
  }
  ul {
    margin: auto;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-between;
    li {
      width: 350px;
      height: 350px;
      margin-bottom: 30px;
      overflow: hidden;
      a {
        position: relative;
        div {
          transition: 300ms;
          position: absolute;
          background-color: black;
          background-image: -webkit-linear-gradient(#020 0%, transparent 25%);
          background-image: linear-gradient(to, transparent 25%);
          background-size: 4px 4px;
          text-shadow: 1px 0px 5px #0f0, -1px 0px 2px #0f0;
          font-family: Ubuntu Mono;
          width: 100%;
          bottom: -55px;
          color: rgba(97, 219, 251, 1);
          font-size: 20px;
        }
      }
      :hover {
        div {
          transition: 300ms;
          bottom: 0;
        }
      }
      img {
        max-width: 100%;
      }
    }
  }
`;

const rawText = [
  "Comunidad",
  "Encuentros",
  "Charlas",
  "Networking",
  "Tecnologías",
  "Experiencias"
];

const slicer = str => {
  var sliced = [];
  for (var i = 0; i <= str.length; i++) {
    sliced.push(str.slice(0, i));
  }

  return sliced;
};

const pause = (str, time) => {
  // Return an array with time copies of str

  var strings = [];
  for (var i = 0; i < time; i++) {
    strings.push(str);
  }
  return strings;
};

const assemble = statements => {
  var slices = [];

  statements.forEach(stmt => {
    var sliced = slicer(stmt);
    var interstatementPause = pause("", 2);
    slices = slices.concat(sliced);

    // Pause on the completed statement
    slices = slices.concat(pause(stmt, 10));

    // Backspace it away
    // slices = slices.concat(sliced.reverse());
    slices = slices.concat(interstatementPause);
  });
  return slices;
};

const App = () => {
  const { scrollY } = useScroll();
  const [slices, setSlices] = useState(assemble(rawText));
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const tick = setInterval(() => {
      setCurrent(slices.shift());
      if (slices.length === 0) {
        setSlices(assemble(rawText));
      }
    }, 300);

    return () => {
      clearInterval(tick);
    };
  });

  return (
    <Layout>
      <HeaderComponent />
      <BannerParallax scrollY={scrollY}>
        <Glass />
        <InfoBanner>
          <h1>
            Reactjs Buenos Aires: {current}
            <SpanComido />
          </h1>
        </InfoBanner>
      </BannerParallax>
      <Icons>
        <Links>
          <a href="https://twitter.com/React_BA" target="_blank">
            <img src="/static/twitter.svg" alt="twitter" width="80px" />
          </a>
          <a
            href="https://www.meetup.com/es-ES/React-js-en-Buenos-Aires"
            target="_blank"
          >
            <img src="/static/meetup.svg" alt="meetup" width="80px" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC8lMWXElwhflZxWqsE6BuPQ"
            target="_blank"
          >
            <img src="/static/youtube.svg" alt="youtube" width="80px" />
          </a>
          <a href="https://slack.meetupjs.com.ar/" target="_blank">
            <img src="/static/slack.svg" alt="slack" width="80px" />
          </a>
          <a href="https://github.com/ReactJS-BA" target="_blank">
            <img src="/static/github.svg" alt="github" width="80px" />
          </a>
        </Links>
        <p>Visita nuestras redes y no te pierdas de nada</p>
      </Icons>
      <About>
        <h2>ORGANIZADORES</h2>
        <ul>
          <li>
            <a href="https://carlosmanotas.com">
              <img src="/static/manotas.jpeg" alt="manotas" />
              <div className="info">
                <p>Carlos Manotas</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/nanovazquez">
              <img src="/static/nano.jpeg" alt="nano" />
              <div className="info">
                <p>Mariano Vazquez</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/sebasjm">
              <img src="/static/sebas.jpeg" alt="sebas" />
              <div className="info">
                <p>Sebastian Marchano</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/gaguirre">
              <img src="/static/gonza.jpeg" alt="gonza" />
              <div className="info">
                <p>Gonzalo Aguirre</p>
              </div>
            </a>
          </li>
        </ul>
        <button
          onClick={() => (location.href = "https://t.co/TLuOgcy3yf?amp=1")}
        >
          Quiero ser Organizador
        </button>
      </About>
      <footer style={{ display: "flex", justifyContent: "space-between", padding: "0px 30px" }}>
        <p>react.js - Buenos Aires</p>
        <p>Version 1.0.0</p>
      </footer>
    </Layout>
  );
};

export default App;
