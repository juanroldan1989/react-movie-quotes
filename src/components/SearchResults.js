import React, { Component } from 'react';
import SearchResult from './SearchResult';
import Pagination from './Pagination';

// "class" component (state, `this.props`, extends from `Component`)
class SearchResults extends Component {
  displayQuotes = () => {
    const quotes = this.props.quotes;

    if (quotes.length === 0) return null;

    console.log(quotes);

    return (
      <React.Fragment>
        <div className="col-12 row">
          {quotes.map(quote => ( 
            <SearchResult key={quote.content.length} quote={quote} />
          ))}
        </div>
        <Pagination previousPage={this.props.previousPage} nextPage={this.props.nextPage} />
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
// `key={quote.content.length}` is the only available way to make this happen
// Ideally it would be `key={quote.id}`
