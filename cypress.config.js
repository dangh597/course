const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    sauceUrl: "https://saucedemo.com",
    sauceBadUser: "standard-user",
    sauceUser: "standard_user"
  },
  e2e: {
    experimentalRunAllSpecs: true,
    experimentalFetchPolyfill: true,
    setupNodeEvents(on, config) {
    },
  },
});
