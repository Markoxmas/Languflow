const initialState = {
  foreign: "Hungarian",
  native: "English",
};

const languageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default languageReducer;
