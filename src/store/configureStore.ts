import configDev from "./configureStore.dev";
import configProd from "./configureStore.prod";

let config = configDev;

if (process.env.NODE_ENV === "production") {
  config = configProd;
}

export default config;

