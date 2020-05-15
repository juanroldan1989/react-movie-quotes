import React, { Component } from 'react';
import SearchInput from './components/search/SearchInput';
import SearchResults from './components/search/SearchResults';
import styled from 'styled-components';
import './App.css';

const ResultsContainerDiv = styled.div`
  display: ${props => props.searching ? 'none' : 'block'};
  .col-12.row {
    padding-right: 0px !important;
  }
`;

const SearchingBarDiv = styled.div`
  display: ${props => props.searching ? 'block' : 'none'};
`;

// "class" component (state, `this.props`, extends from `Component`)
// Also called "container", "stateful" or "smart" components,
// because they handle application's states

// Ideally there should be a few "smart" components
// Having lots of "smart" components could lead to spaghetti code
// and increasing chances of the application becoming unstable
class App extends Component {

  // initial states
  state = {
    query : '',
    searching: false,
    quotes: [],
    page: 1
  }

  // function called whenever search form is submitted
  searchQuery = (data) => {
    this.setState({
      query: data
    }, () => { // callbacks
      this.queryApi();
    })
  }

  // function called whenever search query changes
  setPage = (page) => {
    this.setState({
      page: page
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
    this.setState({ searching: true });

    const searchButton = document.querySelector('#searchButton');
    searchButton.disabled = true;
  }

  searchCompleted = () => {
    this.setState({ searching: false });

    const searchButton = document.querySelector('#searchButton');
    searchButton.disabled = false;
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
            <div className="d-flex justify-content-between">
              <p className="lead">React JS application interacting with&nbsp;
                <a href="https://juanroldan.com.ar/movie-quotes-api" target="_blank">MovieQuotes API</a>
              </p>
              <p className="lead">
                <a href="https://github.com/juanroldan1989/react-movie-quotes" target="_blank">
                  source <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </p>
            </div>
            <hr/>
            <SearchInput
              searchQuery={this.searchQuery}
              setPage={this.setPage}
              searching={this.state.searching}
            />
          </div>

          <div className="row justify-content-center">
            <SearchingBarDiv searching={this.state.searching}>
              <div className="spinner"></div>
            </SearchingBarDiv>

            <ResultsContainerDiv searching={this.state.searching}>
              <SearchResults
                quotes={this.state.quotes}
                query={this.state.query}
                page={this.state.page}
                previousPage={this.previousPage}
                nextPage={this.nextPage}
              />
            </ResultsContainerDiv>
          </div>
        </div>
        <div className="footer">
          <a href="http://juanroldan.com.ar/#portfolio" target="_blank">juanroldan.com.ar</a>
        </div>
      </div>
    )
  }
}

export default App;
