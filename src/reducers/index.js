import { ADD_ARTICLE, SELECT_WORD } from "../constants/action-types";
const initialState = {
  articles: [],
  sentences: ['hurra']
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if( action.type === SELECT_WORD){
    return Object.assign({}, state, {
      sentences: action.payload
    });
  }



  return state;
}
export default rootReducer;
