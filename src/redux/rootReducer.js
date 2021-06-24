import { combineReducers } from "redux";
import listsReducer from "./reducers/listsReducer";
import listEditReducer from "./reducers/listEditReducer";

const rootReducer = combineReducers({ listsReducer, listEditReducer });

export default rootReducer;
