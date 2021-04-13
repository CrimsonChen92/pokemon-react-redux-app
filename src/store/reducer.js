const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CARD":
      console.log("State", state);
      return [...state, action.datum]; //...state copies everything in the initialState and then the next code is the change that's added
    case "REMOVE_CARDS":
      return [...state.filter((cardw) => cardw.id !== action.id)];
  }
  return state;
}

export { reducer };
