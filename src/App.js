import React, { Component } from 'react';
import SearchInput from './components/SearchInput';
import './App.css';

class App extends Component {

  // initial state for `query` is empty String
  // initial state for `quotes` is empty Array
  state = {
    query : '',
    quotes: []
  }

  // function called whenever search form is submitted
  searchQuery = (data) => {
    console.log(data);

    this.setState({
      query: data
    }, () => { // callbacks
      this.queryApi();
    })
  }

  queryApi = () => {
    const query = this.state.query;
    const url = `https://movie-quotes-app.herokuapp.com/api/v1/quotes?content=${query}`;

    console.log(url);

    fetch(url, { headers: { Authorization: 'Token token=3dvoD6MQYeqvH0HHa3AfXAtt' } })
      .then(results => results.json())
      .then(results => this.setState({ quotes: results }))
      // .then(results => console.log(results))
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
