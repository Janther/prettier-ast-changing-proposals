// https://prettier.io/docs/en/configuration.html
module.exports = {
  overrides: [
    {
      files: "*.sol",
      options: {
        // Global configuration
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        // Common configuration
        bracketSpacing: false,
        // Solidity configuration
        explicitTypes: "preserve"
      }
    }
  ]
};
