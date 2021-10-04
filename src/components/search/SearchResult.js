import React from 'react';
import RatingStars from '../quote/RatingStars';
import QuoteImage from '../quote/QuoteImage';
import PropTypes from 'prop-types';
import ReactShowMoreText from 'react-show-more-text';

// "functional" component (no state, no life-cycle, no `this`)
// Also called "dumb", "stateless" or "presentational" components,
// because they just take data from `props` and present it
const SearchResult = (props) => {
  const { content, year, movie, rating, character, actor } = props.quote;
  const itemClassName = props.singleResult === true ? "col-lg-12" : "col-lg-4";

  return (
    <div data-testid="quote-card" className={itemClassName}>
      <div className="bs-component">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <h6 className="card-subtitle text-muted">{year}</h6>
          </div>

          <QuoteImage quote={props.quote} />

          <div className="card-body">
            <RatingStars rating={parseInt(rating)} />
            <p className="card-text">
              <ReactShowMoreText>
                "{content}"
              </ReactShowMoreText>
            </p>
            <p className="card-text text-muted">{character.name} ({actor.name})</p>
          </div>
        </div>
      </div>
    </div>
  )
}

SearchResult.propTypes = {
  quote: PropTypes.object,
  singleResult: PropTypes.bool
};

export default SearchResult;
