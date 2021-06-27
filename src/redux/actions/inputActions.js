import CONST from "../constants";

const inputTypes = {
  table: CONST.UPDATE_TABLE_INPUT_VALUE,
  list: CONST.UPDATE_LIST_INPUT_VALUE,
  modal: CONST.UPDATE_MODAL_INPUT_VALUE,
};

export const onInputChange = (inputType, event) => ({
  type: inputTypes[inputType],
  label: event.target.name,
  value: event.target.value,
});

export const onAddEmptyLexeme = () => ({
  type: CONST.ADD_EMPTY_LEXEME,
});
