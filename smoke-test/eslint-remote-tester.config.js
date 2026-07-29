const parser = require("@typescript-eslint/parser");
const {
  getRepositories,
  getPathIgnorePattern,
} = require("eslint-remote-tester-repositories");
const plugin = require("../index");

module.exports = {
  repositories: getRepositories({ randomize: true }).slice(0, 5),
  pathIgnorePattern: getPathIgnorePattern(),
  extensions: ["js", "jsx", "ts", "tsx"],
  concurrentTasks: 3,
  cache: false,
  logLevel: "info",
  eslintConfig: [
    plugin.configs["flat/all"], //
    { languageOptions: { parser } },
  ],
};
