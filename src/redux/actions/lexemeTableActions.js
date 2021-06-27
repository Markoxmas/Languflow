import CONST from "../constants";

export const onLoadTableLexemes = (list) => ({
  type: CONST.LOAD_TABLE_LEXEMES,
  lexemes: list.lexemes,
  title: list.title,
  id: list.id,
});

export const onToggleTableEdit = () => ({
  type: CONST.TOGGLE_TABLE_EDIT,
});
