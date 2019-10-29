import {createStore} from "redux";
import rootReducer from "data/reducers";


const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState
);

export default configureStore;
