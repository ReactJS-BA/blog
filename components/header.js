import { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";

import NewLayout from "./layout";

const Global = createGlobalStyle`
  *{
    box-sizing: border-box
  }
  body {
    margin: 0px;
    padding: 0px;
    max-width: 100vw;
    overflow-x: hidden;
    
    font-family: 'Open Sans', sans-serif;
  }
`;

const Header = styled.header`
  background: black;
  background-image: -webkit-linear-gradient(#020 0%, transparent 25%);
  background-image: linear-gradient(to, transparent 25%);
  background-size: 4px 4px;
  overflow: hidden;
  height: 85px;
  color: white;
  display: flex;
  figure {
    height: 80px;
    margin: 0;
    padding: 8px;
    width: 80px;
    img {
      max-width: 100%;
    }
  }
`;

const Layout = styled(NewLayout)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #eeeeee;
    text-decoration: none;
    &:hover {
      color: rgba(97, 219, 251, 1);
    }
  }
`;

const HeaderComponent = () => (
  <Fragment>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu+Mono"
        rel="stylesheet"
      />
    </Head>
    <Global />
    <Header>
      <Layout as="nav">
        <a>
          <figure>
            <img src="/static/icon.png" />
          </figure>
        </a>
        <a href="https://t.co/Pw9fPLd2nv?amp=1" target="_blank">
          QUIERO DAR UNA CHARLA
        </a>
        <a href="https://t.co/h6wtTx6mGE?amp=1" target="_blank">
          QUIERO PROPONER LUGAR
        </a>
      </Layout>
    </Header>
  </Fragment>
);

export default HeaderComponent;
