const withCss = require('@zeit/next-css')
const withWorkBox = require('next-workbox')
const withManifest = require('next-manifest')
// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withWorkBox(withManifest(withCss({
    manifest: {
        icons: {
          src: './static/icon.png',
          cache: true
        }
    }
})))
