import CONST from "../constants";
import { MENU } from "../menuContants";

const initialState = {
  value: MENU.LISTS,
};

const menuReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONST.SET_MENU:
      return { ...state, value: action.value };
    default:
      return state;
  }
};

export default menuReducer;
