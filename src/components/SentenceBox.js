import { connect } from "react-redux";
import React from 'react';
import PaperSheet from './PaperSheet';
import Highlight from 'react-highlighter';

const mapStateToProps = state => {
  return { sentences: state.sentences, word: state.word };
};

const ConnectedSentenceBox = ({sentences, word}) => (
 
  <ul>
  {sentences.map((value,id) => (
    <li  key={id}>
      <PaperSheet>
        <Highlight search={word}>{value}</Highlight>
      </PaperSheet>

    </li>
  ))}
  </ul>
)

const SentenceBox = connect(mapStateToProps)(ConnectedSentenceBox);
export default SentenceBox;
