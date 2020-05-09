import React from 'react';
import SearchResult from './SearchResult';
import Pagination from '../Pagination';

const SearchResults = (props) => {
  const displayQuotes = () => {
    const { quotes, query, page } = props;

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
            <div className="col-12 row justify-content-center pagination">
              <Pagination onlyPreviousPage={true} previousPage={props.previousPage} />
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
        <div className="col-12 row justify-content-center pagination">
          <Pagination page={page} previousPage={props.previousPage} nextPage={props.nextPage} />
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

export default SearchResults;

// <React.Fragment> used when no extra HTML tag is needed

// `key` is required by React when calling the same component several times
// `key` value has to be unique for each call
// This way React identifies components faster within the `Virtual DOM`
// This way React knows `which` elements to re-render and which not
