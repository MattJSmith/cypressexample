const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = {
  defaultCommandTimeout: 10000,
  plugins: {
    "cypress-cucumber-preprocessor": {
      nonGlobalStepDefinitions: true,
      stepDefinitions: "cypress/support/step_definitions"
    }
  },
  e2e: {
    specPattern: "cypress/features/**/*.feature",
    headed: true,
    setupNodeEvents(on) {
      on("file:preprocessor", cucumber())
    },
   
  }
};
