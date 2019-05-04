import { connect } from "react-redux";
import React from 'react';

const mapStateToProps = state => {
  return { sentences: state.sentences };
};

const ConnectedSentenceBox = ({sentences}) => (
  <ul className="sentenceBox">
  {sentences.map((value,id) => (
    <li className="list-group-item" key={id}>
      {value}
    </li>
  ))}
</ul>
)

const SentenceBox = connect(mapStateToProps)(ConnectedSentenceBox);
export default SentenceBox;
