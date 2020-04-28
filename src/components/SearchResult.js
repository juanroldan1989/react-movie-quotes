import React from 'react';
import RatingStars from './RatingStars';
import QuoteImage from './QuoteImage';

// "functional" component (no state, no life-cycle, no `this`)
const SearchResult = (props) => {

  const {content, year, movie, rating, character, actor, image_large_url, image_thumb_url } = props.quote;

  return (
    <div className="col-lg-4">
      <div className="bs-component">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <h6 className="card-subtitle text-muted">{year}</h6>
          </div>

          {/* <img src={image_large_url} alt={year} className="card-img-top" /> */}
          <QuoteImage quote={props.quote} />

          <div className="card-body">
            <RatingStars rating={parseInt(rating)} />
            <p className="card-text">"{content}"</p>
            <p className="card-text text-muted">{character.name} ({actor.name})</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;
