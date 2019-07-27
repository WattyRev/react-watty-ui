// styleguide.config.js
const path = require("path");
module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/ThemeWrapper")
  },
  skipComponentsWithoutExample: true,
  ignore: ["**/dual-line.js", "**/quad-line.js"]
};
