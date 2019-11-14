import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import {createLogger} from "redux-logger";
import {reducer} from "data/reducer.js";


const configureStore = () => {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(createLogger())
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("data/reducer", () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
};

export default configureStore;


