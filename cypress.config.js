const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = {
  plugins: {
    "cypress-cucumber-preprocessor": {
      nonGlobalStepDefinitions: true,
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
