import React from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {

  const { page, previousPage, nextPage, onlyPreviousPage } = props;

  const previousButton = () => {
    return (
      <button onClick={previousPage} type="button" className="btn btn-info mr-1">&larr; Previous</button>
    )
  }

  const nextButton = () => {
    return (
      <button onClick={nextPage} type="button" className="btn btn-info">Next &rarr;</button>
    )
  }

  if (page === 1) {
    return (
      <div className="py-3">{nextButton()}</div>
    )
  } else if (onlyPreviousPage) {
    return (
      <div className="py-3">{previousButton()}</div>
    )
  } else {
    return (
      <div className="py-3">{previousButton()}{nextButton()}</div>
    )
  }
}

Pagination.propTypes = {
  page: PropTypes.number,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func,
  onlyPreviousPage: PropTypes.bool
};

export default Pagination;
