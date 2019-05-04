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


/*
loadSentence(word){
  console.log('word to find');
  console.log(word);

  axios
    .get(`http://localhost:8080/sentences?word=${word}`)
    .then(response => {
      console.log(response.data);
      this.setState({
        sentences: response.data

      });

    });

}
*/


export default SentenceBox;
