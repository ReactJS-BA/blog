module.exports = {
    "presets": [
      "next/babel"
    ],
    "plugins": [
      ["styled-components", { "ssr": true, "displayName": true, "preprocess": false } ],
      "transform-decorators-legacy", ["import", { "libraryName": "antd", "style": "css" }]
    ]
}
