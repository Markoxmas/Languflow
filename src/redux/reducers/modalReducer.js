import CONST from "../constants";
import createLexeme from "../../lib/createLexeme";
import getId from "../../lib/getId";

const initialState = {
  lexemes: [{ id: getId(), foreign: "", native: "" }],
};

const modalReducer = (state = initialState, action = {}) => {
  let index, label;
  switch (action.type) {
    case CONST.ADD_EMPTY_LEXEME:
      return {
        ...state,
        lexemes: [
          ...state.lexemes,
          createLexeme({ id: getId(), foreign: "", native: "" }),
        ],
      };
    case CONST.UPDATE_MODAL_INPUT_VALUE:
      [index, label] = action.label.split("-");
      index = parseInt(index);
      return {
        ...state,
        lexemes: [
          ...state.lexemes.slice(0, index),
          { ...state.lexemes[index], [label]: action.value },
          ...state.lexemes.slice(index + 1, state.lexemes.length),
        ],
      };
    case CONST.ADD_LEXEMES_SUCCESS:
      return {
        ...state,
        lexemes: [{ id: getId(), foreign: "", native: "" }],
      };
    default:
      return state;
  }
};

export default modalReducer;
