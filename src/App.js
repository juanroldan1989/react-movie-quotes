import React, { Component } from 'react';
import SearchInput from './components/SearchInput';
import './App.css';

class App extends Component {

  state = {
    query : 'something'
  }

  // 'data' searched by to comunicate along other components
  searchQuery = (data) => {
    console.log(data);

    this.setState({ query: data })
  }

  render() {
    return (
      <div className="App">
        <div className="app container">
          <div className="jumbotron">
            <h1 className="display-3">Movie Quotes!</h1>
            <p className="lead">ReactJS application interacting with MovieQuotes API : )</p>
            <hr className="my-4"></hr>
            <SearchInput searchQuery={this.searchQuery} />
          </div>

          {this.state.query}
        </div>
      </div>
    )
  }
}

export default App;
