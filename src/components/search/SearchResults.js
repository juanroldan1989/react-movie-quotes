import React from 'react';
import SearchResult from './SearchResult';
import Pagination from '../page/Pagination';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import PropTypes from 'prop-types';

const SearchResults = (props) => {
  const displayQuotes = () => {
    const { quotes, query, page, previousPage, nextPage } = props;
    const quotesCounter = quotes.length;
    const singleResult = quotesCounter === 1;

    if (query === "") {
      return (
        <React.Fragment>
          <div data-testid="no-results"></div>
        </React.Fragment>
      )
    }

    if ((quotesCounter === 0) && (query != "")) {
      if (page === 1) {
        return (
          <React.Fragment>
            <div data-testid="no-results" className="col-12">
              <h4>No results for "{query}"</h4>
            </div>
          </React.Fragment>
        )
      } else {
        return (
          <React.Fragment>
            <div data-testid="no-more-results" className="col-12">
              <h4>No more results for "{query}"</h4>
            </div>
            <div data-testid="pagination" className="col-12 row justify-content-center pagination">
              <Pagination onlyPreviousPage={true} previousPage={previousPage} />
            </div>
          </React.Fragment>
        )
      }
    }

    return (
      <React.Fragment>
        <div data-testid="results" className="col-12 row">
          {quotes.map(quote => (
            <ErrorBoundary key={quote.id}>
              <SearchResult quote={quote} singleResult={singleResult} />
            </ErrorBoundary>
          ))}
        </div>
        <div data-testid="pagination" className="col-12 row justify-content-center pagination">
          <Pagination page={page} previousPage={previousPage} nextPage={nextPage} />
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {displayQuotes()}
    </React.Fragment>
  );
}

SearchResults.propTypes = {
  quotes: PropTypes.array,
  query: PropTypes.string,
  page: PropTypes.number,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func
};

export default SearchResults;

// <React.Fragment> used when no extra HTML tag is needed

// `key` is required by React when calling the same component several times
// `key` value has to be unique for each call
// This way React identifies components faster within the `Virtual DOM`
// This way React knows `which` elements to re-render and which not
