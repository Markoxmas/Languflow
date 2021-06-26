import CONST from "../constants";

export const onInputChange = (event) => ({
  type: CONST.UPDATE_INPUT_VALUE,
  label: event.target.name,
  value: event.target.value,
});
