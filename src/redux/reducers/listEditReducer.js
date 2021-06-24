import CONST from "../constants";

const initialState = {
  editing: false,
  pending: false,
  list: undefined,
  success: "",
  errors: [],
};

const listEditReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONST.ADD_LIST_PENDING:
    case CONST.EDIT_LIST_PENDING:
    case CONST.DELETE_LIST_PENDING:
      return { ...state, pending: true };
    case CONST.ADD_LIST_SUCCESS:
    case CONST.EDIT_LIST_SUCCESS:
    case CONST.DELETE_LIST_SUCCESS:
      return { ...state, pending: false, success: action.success, errors: [] };
    case CONST.ADD_LIST_FAILED:
    case CONST.EDIT_LIST_FAILED:
    case CONST.DELETE_LIST_FAILED:
      return { ...state, pending: false, success: "", errors: action.error };
    default:
      return state;
  }
};

export default listEditReducer;
