import { ADD_INGREDIENT } from "../constants/action-types";

const initialState = {
  ingredients: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_INGREDIENT) {
    return Object.assign({}, state, {
      ingredients: state.ingredients.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;