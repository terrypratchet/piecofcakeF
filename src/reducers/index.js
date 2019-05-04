import { ADD_ARTICLE, SELECT_WORD, LOAD_SENTENCES } from "../constants/action-types";
const initialState = {
  articles: [],
  word: 'nic',
  sentences: ['hurra']
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
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
