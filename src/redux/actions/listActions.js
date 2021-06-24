import CONST from "../constants";
import axios from "axios";

export const onAddList = (list) => (dispatch) => {
  dispatch({ type: CONST.ADD_LIST_PENDING });
  axios
    .post("http://localhost:3001/lists", list)
    .then((response) =>
      dispatch({
        type: CONST.ADD_LIST_SUCCESS,
        list: response.data,
        success: "List was added!",
      })
    )
    .catch((error) =>
      dispatch({
        type: CONST.ADD_LIST_FAILED,
        error: "There was a problem with adding the list!",
      })
    );
};
