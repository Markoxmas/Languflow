import CONST from "../constants";

export const onLoadTableLexemes = (lexemes) => ({
  type: CONST.LOAD_TABLE_LEXEMES,
  lexemes,
});
