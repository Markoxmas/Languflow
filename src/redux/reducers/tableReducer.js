import CONST from "../constants";

const initialState = {
  lexemes: [],
  title: "",
  listId: undefined,
  editing: false,
  pending: false,
};

const tableReducer = (state = initialState, action = {}) => {
  let index, label;
  switch (action.type) {
    case CONST.LOAD_TABLE_LEXEMES:
      return {
        ...state,
        lexemes: action.lexemes,
        title: action.title,
        listId: action.id,
      };
    case CONST.TOGGLE_TABLE_EDIT:
      return { ...state, editing: !state.editing };
    case CONST.DELETE_LEXEMES_PENDING:
      return { ...state, pending: true };
    case CONST.ADD_LEXEMES_SUCCESS:
    case CONST.EDIT_LEXEMES_SUCCESS:
    case CONST.DELETE_LEXEMES_SUCCESS:
      return { ...state, pending: false, lexemes: action.lexemes };
    case CONST.DELETE_LEXEMES_FAILED:
      return { ...state, pending: false };
    case CONST.UPDATE_TABLE_INPUT_VALUE:
      [index, label] = action.label.split("-");
      index = parseInt(index);
      return {
        ...state,
        lexemes: [
          ...state.slice(0, index),
          { ...state.lexemes[index], [label]: action.value },
          ...state.slice(index + 1, state.lexemes.length),
        ],
      };
    default:
      return state;
  }
};

export default tableReducer;
