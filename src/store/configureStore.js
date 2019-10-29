if (process.env.NODE_ENV === "production") {
  module.exports = require("./configureStore.prod");
} else {
   console.log("asdasd");
  module.exports = require("./configureStore.dev");
}
