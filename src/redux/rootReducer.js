import { combineReducers } from "redux";
import listsReducer from "./reducers/listsReducer";
import listEditReducer from "./reducers/listEditReducer";
import tableReducer from "./reducers/tableReducer";
import languageReducer from "./reducers/languageReducer";
import modalReducer from "./reducers/modalReducer";
import menuReducer from "./reducers/menuReducer";

const rootReducer = combineReducers({
  listsReducer,
  listEditReducer,
  tableReducer,
  languageReducer,
  modalReducer,
  menuReducer,
});

export default rootReducer;
