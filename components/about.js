import styled from "styled-components";
import { organizer } from "../lib/data";

const About = styled.div`
  width: 100%;
  text-align: center;
  background-color: #999;
  padding-bottom: 40px;
  button {
    width: 100%;
    max-width: 350px;
    height: 35px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 15px;
    background: white;
    border: none;
  }
  h2 {
    font-size: 20px;
    color: white;
  }
  ul {
    margin: auto;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    padding: 0;
    li {
      width: 350px;
      height: 350px;
      margin-bottom: 30px;
      overflow: hidden;
      a {
        position: relative;
        div {
          position: absolute;
          background-color: black;
          background-image: -webkit-linear-gradient(#020 0%, transparent 25%);
          background-image: linear-gradient(to, transparent 25%);
          background-size: 4px 4px;
          text-shadow: 1px 0px 5px #0f0, -1px 0px 2px #0f0;
          font-family: Ubuntu Mono;
          width: 100%;
          bottom: 0px;
          color: rgba(97, 219, 251, 1);
          font-size: 20px;
        }
      }
      img {
        max-width: 100%;
      }
    }
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 3em;
    }
    ul {
      justify-content: space-between;
      li {
        a {
          div {
            transition: 300ms;
            bottom: -55px;
          }
          &:hover {
            div {
              transition: 300ms;
              bottom: 0;
            }
          }
        }
      }
    }
    .optionalButton {
      display: none;
    }
  }
`;

export default () => (
  <About>
    <h2>ORGANIZADORES</h2>
    <ul>
      {organizer.map(({ href, src, name }) => (
        <li key={name}>
          <a href={href}>
            <img src={src} alt={name} />
            <div className="info">
              <p>{name}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
    <button
      onClick={() => window.open("https://t.co/TLuOgcy3yf?amp=1", "_blank")}
    >
      QUIERO SER PARTE
    </button>
    <button
      className="optionalButton"
      onClick={() => window.open("https://t.co/Pw9fPLd2nv?amp=1", "_blank")}
    >
      QUIERO DAR UNA CHARLA
    </button>
    <button
      className="optionalButton"
      onClick={() => window.open("https://t.co/h6wtTx6mGE?amp=1", "_blank")}
    >
      QUIERO PROPONER LUGAR
    </button>
  </About>
);
