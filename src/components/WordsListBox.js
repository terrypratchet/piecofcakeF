import React from 'react';
import { connect } from "react-redux";
import { loadSentences } from "../actions/index";
import SimpleList from "./SimpleList";


const ConnectedWordsListBox  = ({words, loadSentences}) => {
  console.log("aaaaaaaaaaa");
  console.log(words);

  const handleOnClick = (word)=> {
    //event.preventDefault();
    console.log(word);
    loadSentences(word);
    //this.props.loadSentences(word);
  }


  const listItems = Object.keys(words).map(key=>
    <li key={key} onClick={ ()=> handleOnClick(key)}>
      {key}: {words[key]}
    </li>

  );//  {listItems}
    return( <div  >
<SimpleList handleOnClick={handleOnClick} words={words} />

      </div>);
}

function mapDispatchToProps(dispatch) {
  return {
    loadSentences: word => dispatch(loadSentences(word))
  };
}
/*

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}
*/
const WordsListBox = connect(null, mapDispatchToProps)(ConnectedWordsListBox);
export default WordsListBox;
