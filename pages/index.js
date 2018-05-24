import HeaderComponent from '../components/header';
import styled from 'styled-components';
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  figure{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 0;
    align-self: center;
    img{
      max-width: 100%;
    }
  }
`
export default () => (
  <Layout>
    <HeaderComponent />
    <figure>
      <img src="/static/icon.png"/>
      <figcaption>Proximamente</figcaption>
    </figure>
  </Layout>
)
