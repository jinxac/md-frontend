import {createStore} from "redux";
import {reducer} from "data/reducer.js";


const configureStore = () => createStore(
  reducer
);

export default configureStore;
