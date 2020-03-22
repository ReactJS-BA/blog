import styled from "styled-components";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;

export default () => (
  <Footer>
    <p>React.js - Buenos Aires</p>
    <p>Version {publicRuntimeConfig.NEXT_APP_VERSION}</p>
  </Footer>
);
