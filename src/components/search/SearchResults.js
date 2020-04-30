import React, { Component } from 'react';
import SearchResult from './SearchResult';
import Pagination from '../Pagination';

// "class" component (state, `this.props`, extends from `Component`)
class SearchResults extends Component {
  displayQuotes = () => {
    const { quotes, query, page } = this.props;

    if (query === "") return null;

    if ((quotes.length === 0) && (query != "")) {
      if (page === 1) {
        return(
          <React.Fragment>
            <div className="col-12">
              <h4>No results for "{query}"</h4>
            </div>
          </React.Fragment>
        )
      } else {
        return(
          <React.Fragment>
            <div className="col-12">
              <h4>No more results for "{query}"</h4>
            </div>
            <div className="col-12 row justify-content-center">
              <Pagination onlyPreviousPage={true} previousPage={this.props.previousPage} />
            </div>
          </React.Fragment>
        )
      }
    }

    return (
      <React.Fragment>
        <div className="col-12 row">
          {quotes.map(quote => ( 
            <SearchResult key={quote.id} quote={quote} />
          ))}
        </div>
        <hr/>
        <div className="col-12 row justify-content-center">
          <Pagination page={page} previousPage={this.props.previousPage} nextPage={this.props.nextPage} />
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment> 
        {this.displayQuotes()}
      </React.Fragment>
    );
  }
}

export default SearchResults;

// <React.Fragment> used when no extra HTML tag is needed

// `key` is required by React when calling the same component severa times
// This way React can identify components faster within the `Virtual DOM`
// `key` value has to be unique for each call
