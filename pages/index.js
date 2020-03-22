import { useState, useEffect } from "react";
import styled from "styled-components";

import { rawText } from "../lib/data";
import HeaderComponent from "../components/header";
import Footer from "../components/footer";
import InfoBanner from "../components/textType";
import BannerParallax from "../components/banner";
import Icons from "../components/icons";
import About from "../components/about";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const slicer = str => {
  let sliced = [];
  for (let i = 0; i <= str.length; i++) {
    sliced.push(str.slice(0, i));
  }
  return sliced;
};

const pause = (str, time) => {
  let strings = [];
  for (let i = 0; i < time; i++) {
    strings.push(str);
  }
  return strings;
};

const assemble = statements => {
  let slices = [];
  statements.forEach(stmt => {
    const sliced = slicer(stmt);
    const interstatementPause = pause("", 2);
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
      <BannerParallax>
        <InfoBanner current={current} />
      </BannerParallax>
      <Icons />
      <About />
      <Footer />
    </Layout>
  );
};

export default App;
