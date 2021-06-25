import CONST from "../constants";

const initialState = {
  lexemes: [],
};

const tableReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONST.LOAD_TABLE_LEXEMES:
      return { ...state, lexemes: action.lexemes };
    default:
      return state;
  }
};

export default tableReducer;
