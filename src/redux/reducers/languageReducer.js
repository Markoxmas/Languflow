const initialState = {
  foreign: "hungarian",
  native: "english",
};

const languageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default languageReducer;
