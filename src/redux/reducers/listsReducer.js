import CONST from "../constants";

const initialState = [];

const listsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONST.ADD_LIST_SUCCESS:
      return [...state, action.list];
    default:
      return state;
  }
};

export default listsReducer;
