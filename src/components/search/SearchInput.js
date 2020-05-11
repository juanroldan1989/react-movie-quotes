import React from 'react';

const SearchInput = (props) => {
  let searchRef = React.createRef();

  let submitHandler = (e) => {
    e.preventDefault();

    // get search input value
    const value = searchRef.current.value;

    // send value to parent component to comunicate it over other components
    props.searchQuery(value);
  }

  let searchButtonHandler = (e) => {
    // whenever search query changes, page is set to `1`
    props.setPage(1);

    let value = e.target.value;
    let disabled = (value === "");
    let button = document.querySelector('#searchButton');
    button.disabled = disabled;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="form-group col-md-8">
          <input onChange={searchButtonHandler} ref={searchRef} type="text" className="form-control form-control-lg" placeholder="there is no spoon ..." />
        </div>
        <div className="form-group col-md-4">
          <input disabled id="searchButton" type="submit" className="btn btn-lg btn-danger btn-block" value="Search" />
        </div>
      </div>
    </form>
  );
}

export default SearchInput;
