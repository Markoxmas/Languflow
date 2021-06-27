import CONST from "../constants";
import axios from "axios";

// for now the actions are pretty much the same, but when backend is done, they won't be.
export const onAddLexemes = (listId, lexemes) => (dispatch) => {
  dispatch({ type: CONST.ADD_LEXEMES_PENDING });
  axios
    .patch(`http://localhost:3001/lists/${listId}`, {
      lexemes: [...lexemes],
    })
    .then((reponse) =>
      dispatch({
        type: CONST.ADD_LEXEMES_SUCCESS,
        listId,
        lexemes,
        success: "Lexemes were successfully added!",
      })
    )
    .catch((error) =>
      dispatch({
        type: CONST.ADD_LEXEMES_FAILED,
        error: "Something went wrong when adding lexemes!",
      })
    );
};

export const onEditLexemes = (listId, lexemes) => (dispatch) => {
  dispatch({ type: CONST.EDIT_LEXEMES_PENDING });
  axios
    .patch(`http://localhost:3001/lists/${listId}`, {
      lexemes: [...lexemes],
    })
    .then((reponse) =>
      dispatch({
        type: CONST.EDIT_LEXEMES_SUCCESS,
        listId,
        lexemes,
        success: "Lexemes were successfully updated!",
      })
    )
    .catch((error) =>
      dispatch({
        type: CONST.EDIT_LEXEMES_FAILED,
        error: "Something went wrong when updating lexemes",
      })
    );
};

export const onDeleteLexemes = (listId, lexemes) => (dispatch) => {
  dispatch({ type: CONST.DELETE_LEXEMES_PENDING });
  axios
    .patch(`http://localhost:3001/lists/${listId}`, {
      lexemes: [...lexemes],
    })
    .then((reponse) =>
      dispatch({
        type: CONST.DELETE_LEXEMES_SUCCESS,
        listId,
        lexemes,
        success: "Lexemes were successfully deleted!",
      })
    )
    .catch((error) =>
      dispatch({
        type: CONST.DELETE_LEXEMES_FAILED,
        error: "Something went wrong when deleting lexemes",
      })
    );
};
