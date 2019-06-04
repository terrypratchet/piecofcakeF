import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import WordsListBox from './components/WordsListBox';
import SentenceBox from './components/SentenceBox';
class App extends React.Component {

  constructor(props){
    super(props);
    console.log("process.env.NODE_ENV:" + process.env.NODE_ENV);//development
    console.log("process.env.REACT_APP_MOJA_ZMIEENA:" + process.env.REACT_APP_MOJA_ZMIEENA);
    console.log("process.env.JAVA_HOME:" + process.env.JAVA_HOME);
    console.log(process.env);
    this.state = {
      sentences: [],
      offset: 0,
      hasMore: true,
      words: {},
      data: {
          words: {},

          stat:{
            totalCount:0
          }

        }
    }
  }

  loadFunction(data){
    console.log('data');
    console.log(data);
    console.log("offset: " + this.state.offset);
    const offset = this.state.offset;
    axios
      .get(`/greeting?sort=asc&limit=50&offset=${offset}&moreThan=1`)
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data,
          words: { ...this.state.words, ...response.data.words},
          offset: this.state.offset+50,
          hasMore: response.data.distinctCount > offset+50
        });

      });

  }


  hasMore(){
    return this.state.data.count > this.state.offset+50;
  }

  componentDidMount(){
    console.log("mount-----------");
    this.loadFunction();
  }

  render() {
    console.log("heja +++ -----------");
    console.log(this.state.data);
    return (
      <div>
        <div className="wordsContainer">
          total count: {this.state.data.stat.totalCount}

          <InfiniteScroll
              pageStart={0}
              loadMore={this.loadFunction.bind(this)}
              hasMore={this.hasMore()|| true }
              loader={<div className="loader" key={0}>Loading ...</div>}
              useWindow={false}
          >

              <WordsListBox words={this.state.words}>
              </WordsListBox>

          </InfiniteScroll>


        </div>

        <div className = "sentenceBox">
          <SentenceBox>
          </SentenceBox>
        </div>

      </div>
    );
  }
}



export default App;
