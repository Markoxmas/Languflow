import { combineReducers } from "redux";
import listsReducer from "./reducers/listsReducer";
import listEditReducer from "./reducers/listEditReducer";
import tableReducer from "./reducers/tableReducer";
import languageReducer from "./reducers/languageReducer";

const rootReducer = combineReducers({
  listsReducer,
  listEditReducer,
  tableReducer,
  languageReducer,
});

export default rootReducer;
