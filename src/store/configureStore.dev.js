import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import {createLogger} from "redux-logger";
import reducer from "data/reducer";


const configureStore = preloadedState => {
  const store = createStore(
    reducer,
    preloadedState,
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


