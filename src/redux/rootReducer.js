import { combineReducers } from "redux";
import listsReducer from "./reducers/listsReducer";
import listEditReducer from "./reducers/listEditReducer";
import tableReducer from "./reducers/tableReducer";

const rootReducer = combineReducers({
  listsReducer,
  listEditReducer,
  tableReducer,
});

export default rootReducer;
