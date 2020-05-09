import React from 'react';

const SearchingBar = (props) => {
  let displayBar = () => {
    if (props.searching === false) return null;

    return (
      <React.Fragment>
        <div className="spinner"></div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {displayBar()}
    </React.Fragment>
  )
}

export default SearchingBar;
