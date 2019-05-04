import { SELECT_WORD, LOAD_SENTENCES } from "../constants/action-types";
const initialState = {
  articles: [],
  word: 'nic',
  sentences: ['hurra']
};
function rootReducer(state = initialState, action) {
  if (action.type === SELECT_WORD) {
    return Object.assign({}, state, {
      word: action.word
    });
  }

  if( action.type === LOAD_SENTENCES){
    return Object.assign({}, state, {
      sentences: action.payload
    });
  }

  return state;
}
export default rootReducer;
