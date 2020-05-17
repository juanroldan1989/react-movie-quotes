import React from 'react';

const Pagination = (props) => {

  const { page, onlyPreviousPage } = props;

  const previousButton = () => {
    return (
      <button onClick={props.previousPage} type="button" className="btn btn-info mr-1">&larr; Previous</button>
    )
  }

  const nextButton = () => {
    return (
      <button onClick={props.nextPage} type="button" className="btn btn-info">Next &rarr;</button>
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

export default Pagination;
