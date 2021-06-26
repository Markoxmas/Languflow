import CONST from "../constants";

const initialState = {
  loading: false,
  editing: false,
  editingId: undefined,
  adding: false,
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
      return {
        ...state,
        pending: false,
        success: action.success,
        errors: [],
        list: {},
        adding: false,
        editing: false,
      };
    case CONST.ADD_LIST_FAILED:
    case CONST.EDIT_LIST_FAILED:
    case CONST.DELETE_LIST_FAILED:
      return { ...state, pending: false, success: "", errors: action.error };
    case CONST.INIT_ADD_LIST:
      return {
        ...state,
        list: action.initialList,
        adding: true,
        editing: false,
      };
    case CONST.INIT_EDIT_LIST:
      return {
        ...state,
        list: action.list,
        editingId: action.list.id,
        editing: true,
        adding: false,
      };
    case CONST.UPDATE_INPUT_VALUE:
      console.log("action", action);
      return {
        ...state,
        list: { ...state.list, [action.label]: action.value },
      };
    case CONST.LOAD_LIST_PENDING:
      return { ...state, loading: true };
    case CONST.LOAD_LIST_SUCCESS:
    case CONST.LOAD_LIST_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default listEditReducer;
