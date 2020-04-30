import React, { Component } from 'react';

class SearchingBar extends Component {
  displayBar = () => {
    if (this.props.searching === false) return null;

    return (
      <React.Fragment>
        <div className="spinner"></div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.displayBar()}
      </React.Fragment>
    );
  }
}

export default SearchingBar;
