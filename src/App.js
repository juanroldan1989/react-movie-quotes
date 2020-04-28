import React, { Component } from 'react';
import SearchingBar from './components/SearchingBar';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import './App.css';

class App extends Component {

  // initial state for `query` is empty String
  // initial state for `quotes` is empty Array
  state = {
    query : '',
    searching: false,
    quotes: [],
    page: 1
  }

  // function called whenever search form is submitted
  searchQuery = (data) => {
    console.log("SearchQuery: ", data);

    this.setState({
      query: data
    }, () => { // callbacks
      this.queryApi();
    })
  }

  previousPage = () => {
    let page = this.state.page;

    if (page === 1) return null;

    page -= 1;

    this.setState({
      page: page
    }, () => { // callbacks
      this.queryApi();
      this.scroll()
    });
  }

  nextPage = () => {
    let page = this.state.page;

    page += 1;

    this.setState({
      page: page
    }, () => { // callbacks
      this.queryApi();
      this.scroll()
    });
  }

  scroll = () => {
    const header = document.querySelector('.jumbotron');
    header.scrollIntoView('smooth', 'start');
  }

  searchStarted = () => {
    console.log("searchStarted!");
    this.setState({ searching: true });

    const searchingBar = document.querySelector('#searchingBar');
    searchingBar.style.display = 'block';

    const resultsContainer = document.querySelector('#resultsContainer');
    resultsContainer.style.display = 'none';
  }

  searchCompleted = () => {
    console.log("searchCompleted!");
    this.setState({ searching: false });

    const searchingBar = document.querySelector('#searchingBar');
    searchingBar.style.display = 'none';

    const resultsContainer = document.querySelector('#resultsContainer');
    resultsContainer.style.display = 'block';
  }

  queryApi = () => {
    const query = this.state.query;
    const page = this.state.page;
    const url = `https://movie-quotes-app.herokuapp.com/api/v1/quotes?multiple=${query}&page=${page}`;

    this.searchStarted();
    fetch(url, { headers: { Authorization: `Token token=${process.env.REACT_APP_API_KEY}` } })
      .then(results => results.json())
      .then(results => this.setState({ quotes: results }))
      .then(results => this.searchCompleted())
      // .then(results => console.log(results))
  }

  render() {
    return (
      <div className="App">
        <div className="app container">
          <div className="jumbotron">
            <h1 className="display-3">Movie Quotes!</h1>
            <p className="lead">ReactJS application interacting with
              <a href="https://juanroldan.com.ar/movie-quotes-api" target="_blank"> MovieQuotes API</a>
            </p>
            <hr className="my-4"></hr>
            <SearchInput searchQuery={this.searchQuery} />
          </div>

          <div className="row justify-content-center">
            <div id="searchingBar">
              <SearchingBar searching={this.state.searching} />
            </div>
            <div id="resultsContainer">
              <SearchResults
                quotes={this.state.quotes}
                previousPage={this.previousPage}
                nextPage={this.nextPage}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
