const { defineConfig } = require("cypress");
module.exports = defineConfig({
  "video": false,
  env: {
    saucePassword: "",
    sauceUser: "standard_user",
    sauceUrl: "https://www.saucedemo.com",
    sauceBadUser: "standard-user",
    sauceLockedUser: "locked_out_user",
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    experimentalRunAllSpecs: true,
    experimentalFetchPolyfill: true,
    setupNodeEvents(on, config) {
    },
  },
});

