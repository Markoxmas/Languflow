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
        success: "List was successfully added!",
      })
    )
    .catch((error) =>
      dispatch({
        type: CONST.ADD_LIST_FAILED,
        error: "There was a problem with adding the list!",
      })
    );
};

export const onEditList = (list) => (dispatch) => {
  dispatch({ type: CONST.EDIT_LIST_PENDING });
  axios
    .put(`http://localhost:3001/lists/${list.id}`, list)
    .then((response) =>
      dispatch({
        type: CONST.EDIT_LIST_SUCCESS,
        list: response.data,
        success: "List was successfully updated!",
      })
    )
    .catch((error) =>
      dispatch({
        type: CONST.EDIT_LIST_FAILED,
        error: "There was a problem with editing the list!",
      })
    );
};

export const onDeleteList = (list) => (dispatch) => {
  dispatch({ type: CONST.DELETE_LIST_PENDING });
  axios
    .delete(`http://localhost:3001/lists/${list.id}`, list)
    .then((response) =>
      dispatch({
        type: CONST.DELETE_LIST_SUCCESS,
        list: response.data,
        success: "List was successfully deleted!",
      })
    )
    .catch((error) =>
      dispatch({
        type: CONST.DELETE_LIST_FAILED,
        error: "There was a problem with deleting the list!",
      })
    );
};
