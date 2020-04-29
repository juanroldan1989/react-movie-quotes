import React, { Component } from 'react';

class SearchInput extends Component {

  searchRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    // get search input value
    const value = this.searchRef.current.value;

    // send value to parent component to comunicate it over other components
    this.props.searchQuery(value);
  }

  checkSearchButton = (e) => {
    let value = e.target.value;
    let disabled = (value === "");
    let button = document.querySelector('#searchButton');
    button.disabled = disabled;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="form-group col-md-8">
            <input onChange={this.checkSearchButton} ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="there is no spoon ..." />
          </div>
          <div className="form-group col-md-4">
            <input disabled id="searchButton" type="submit" className="btn btn-lg btn-danger btn-block" value="Search" />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchInput;
