import { connect } from "react-redux";
import React from 'react';
import PaperSheet from './PaperSheet';
import Highlight from 'react-highlighter';

const mapStateToProps = state => {
  return { sentences: state.sentences, word: state.word };
};

const ConnectedSentenceBox = ({sentences, word}) => (
  <PaperSheet>
  <ul>
  {sentences.map((value,id) => (
    <li  key={id}>
      <Highlight search={word}>{value}</Highlight>
    </li>
  ))}
  </ul>
  </PaperSheet>
)

const SentenceBox = connect(mapStateToProps)(ConnectedSentenceBox);
export default SentenceBox;
