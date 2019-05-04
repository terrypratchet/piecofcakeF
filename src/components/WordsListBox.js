import React from 'react';
import { connect } from "react-redux";
import { selectSentence } from "../actions/index";

const ConnectedWordsListBox  = ({words, selectSentence}) => {
  console.log("aaaaaaaaaaa");
  console.log(words);

  const handleOnClick = (word)=> {
    //event.preventDefault();
    console.log(word);
    selectSentence(word);
    //this.props.selectSentence(word);
  }

  const listItems = Object.keys(words).map(key=>
    <li key={key} onClick={ ()=> handleOnClick(key)}>
      {key}: {words[key]}
    </li>

  );
    return( <div  >
          {listItems}
      </div>);
}

function mapDispatchToProps(dispatch) {
  return {
    selectSentence: word => dispatch(selectSentence(word))
  };
}

const WordsListBox = connect(null, mapDispatchToProps)(ConnectedWordsListBox);
export default WordsListBox;
