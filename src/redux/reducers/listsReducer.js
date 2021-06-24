import CONST from "../constants";

const initialState = [];

const listsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONST.ADD_LIST_SUCCESS:
      return [...state, action.list];
    case CONST.EDIT_LIST_SUCCESS:
      return [
        ...state.map((list) =>
          list.id === action.list.id ? action.list : list
        ),
      ];
    case CONST.DELETE_LIST_SUCCESS:
      return [...state.filter((list) => list.id !== action.list.id)];
    default:
      return state;
  }
};

export default listsReducer;
