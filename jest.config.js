// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    coverageDirectory: '../coverage',
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    coverageThreshold: {
        "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 100
        }
    },
    moduleFileExtensions: [
        'js',
        'json'
    ],
    rootDir: "./src",
    testMatch: [
        "**/?(*)+(*[sS]pec|test).[tj]s?(x)"
    ],
    testEnvironment: "node",

    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],




};