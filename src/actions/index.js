import { ADD_ARTICLE, SELECT_WORD } from "../constants/action-types";
import axios from 'axios';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function selectSentence(word){
  return function(dispatch){
    axios
      .get(`http://localhost:8080/sentences?word=${word}`)
      .then(response => {
        console.log(response.data);
        dispatch({ type: SELECT_WORD, payload: response.data });
      });

  }
}
