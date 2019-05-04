import { connect } from "react-redux";
import React from 'react';

import Highlight from 'react-highlighter';

const mapStateToProps = state => {
  return { sentences: state.sentences, word: state.word };
};

const ConnectedSentenceBox = ({sentences, word}) => (
  <ul className="sentenceBox">
  {sentences.map((value,id) => (
    <li className="list-group-item" key={id}>
      <Highlight search={word}>{value}</Highlight>
    </li>
  ))}
</ul>
)

const SentenceBox = connect(mapStateToProps)(ConnectedSentenceBox);
export default SentenceBox;
