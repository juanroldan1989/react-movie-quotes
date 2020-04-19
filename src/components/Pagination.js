import React from 'react';

const Pagination = (props) => {
  return (
    <div className="py-3">
      <button onClick={props.previousPage} type="button" className="btn btn-info mr-1">&larr; Previous</button>
      <button onClick={props.nextPage} type="button" className="btn btn-info">Next &rarr;</button>
    </div>
  )
}

export default Pagination;
