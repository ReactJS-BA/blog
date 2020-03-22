const { version } = require("./package.json");

module.exports = {
  publicRuntimeConfig: {
    NEXT_APP_VERSION: version
  }
};
