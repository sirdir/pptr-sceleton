module.exports = {
  verbose: true,
  testEnvironment: "node",
  globalSetup: '<rootDir>/src/setup.js',
  reporters: [
    "default",
    ["jest-html-reporters", {
      "publicPath": "./report",
      "filename": "./jest_html_reporters.html",
    }]
  ]
};
