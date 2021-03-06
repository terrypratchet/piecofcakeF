import {SELECT_WORD, LOAD_SENTENCES } from "../constants/action-types";
import axios from 'axios';

export function selectWord(word) {
  return { type: SELECT_WORD, word };
}

export function loadSentences(word){
  return function(dispatch){
    dispatch( { type: SELECT_WORD, word } );
    axios
      .get(`/sentences?word=${word}`)
      .then(response => {
        console.log(response.data);
        console.log("process.env:");
        console.log(process.env);
        dispatch({ type: LOAD_SENTENCES, payload: response.data });
      });

  }
}
