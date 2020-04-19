import React from 'react';

// "functional" component (no state, no life-cycle, no `this`)
const SearchResult = (props) => {

  const {content, year, movie, character, actor, image_large_url, image_thumb_url } = props.quote;

  return (
    <div className="col-lg-4">
      <div className="bs-component">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <h6 className="card-subtitle text-muted">{year}</h6>
          </div>

          <img src={image_thumb_url} alt={year} className="card-img-top" />

          <div className="card-body">
            <p className="card-text">"{content}"</p>
            <p className="card-text text-muted">{character.name} ({actor.name})</p>
          </div>

          <div className="card-footer text-muted">
            <a href={image_large_url} target="_blank" className="card-link">Large image</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;
