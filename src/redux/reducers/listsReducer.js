import CONST from "../constants";

const initialState = [];

const listsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONST.LOAD_LIST_SUCCESS:
      return [...action.lists];
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
    case CONST.ADD_LEXEMES_SUCCESS:
    case CONST.EDIT_LEXEMES_SUCCESS:
    case CONST.DELETE_LEXEMES_SUCCESS:
      return [
        ...state.map((list) =>
          list.id === action.listId
            ? { ...list, lexemes: action.lexemes }
            : list
        ),
      ];
    default:
      return state;
  }
};

export default listsReducer;
