import React, { Component } from 'react';

class SearchInput extends Component {

  searchRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    // get search input value
    const value = this.searchRef.current.value;
    console.log("SUBMIT: ", value);

    // send value to parent component to comunicate it over other components
    this.props.searchQuery(value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="form-group col-md-8">
            <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="there is no spoon ..." />
          </div>
          <div className="form-group col-md-4">
            <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search" />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchInput;
