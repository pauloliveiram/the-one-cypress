const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-one-api.dev/v2",
    specPattern: ["cypress/integration/api-tests/*.spec.{js,jsx,ts,tsx}", 
                  "cypress/integration/api-tests/book/*.spec.{js,jsx,ts,tsx}",
                  "cypress/integration/api-tests/book/id/*.spec.{js,jsx,ts,tsx}",
                  "cypress/integration/api-tests/movie/*.spec.{js,jsx,ts,tsx}",
                  "cypress/integration/api-tests/movie/id/*.spec.{js,jsx,ts,tsx}",
                  "cypress/integration/api-tests/character/*.spec.{js,jsx,ts,tsx}",
                  "cypress/integration/api-tests/character/id/*.spec.{js,jsx,ts,tsx}",
                  "cypress/integration/api-tests/quote/*.spec.{js,jsx,ts,tsx}",
                  "cypress/integration/api-tests/chapter/*.spec.{js,jsx,ts,tsx}"],
    setupNodeEvents(on, config) {
      pluginsFile: "cypress/plugins/index.js"
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
  video: false,
  
});
