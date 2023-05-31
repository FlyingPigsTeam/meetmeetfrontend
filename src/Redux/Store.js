import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { SidebarExpanded } from "./Reducer";

const reducer = combineReducers({
  SidebarExpanded,
});
const middleWare = [thunk];
const initialState = {
  SidebarExpanded: false,
};
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
