import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import ServiceWorker from 'next-workbox/service-worker';
import Manifest from 'next-manifest/manifest'
export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang="es">
        <Head>
          <title>ReactJS-Ba</title>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/static/icon.png" />
          <meta name="Description" content="ReactJS community Buenos Aires" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icon.png" />
          <link rel="apple-touch-startup-image" href="/static/icon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
          <Manifest themeColor="#000000" />
          <link rel='stylesheet' href='/_next/static/style.css' />
          <link defer async href="https://fonts.googleapis.com/css?family=Lobster+Two:400i" rel="stylesheet" />
          <ServiceWorker src={'/static/workbox/sw.js'} scope={'../../'} unregister={process.env.NODE_ENV !== 'production'}/>
          {this.props.styleTags}
          <style>
              {`*{box-sizing: border-box} body{margin: 0; padding: 0; max-width: 100vw; overflow-x: hidden}`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
