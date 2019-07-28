const { createJestConfig } = require('create-react-styleguide');

module.exports = createJestConfig({
    coverageThreshold: {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": 80
        }
    },
    collectCoverageFrom: [
        "src/**/*.js",
        "!src/**/*.test.js"
    ],
    /* your own config shallowly merged */
    setupFilesAfterEnv: ['jest-styled-components', "<rootDir>/setupTests.js"],
});
