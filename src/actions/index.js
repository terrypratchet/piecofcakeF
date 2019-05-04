import { ADD_ARTICLE, SELECT_WORD, LOAD_SENTENCES } from "../constants/action-types";
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
        dispatch({ type: LOAD_SENTENCES, payload: response.data });
      });

  }
}
