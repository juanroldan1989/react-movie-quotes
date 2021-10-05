import React, { Component } from 'react';

// Only meant to be used on those scenarios when
// code might fail and we can't control that
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error })
  }

  render() {
    if (this.state.hasError) {
      return <h1 data-testid="error-message">{this.state.errorMessage}</h1>
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

// Full example: https://codepen.io/gaearon/pen/wqvxGa?editors=0010
