import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AppInfo = (props) => {

  // It is executed on every `render` cycle:
  // - `create`: first render cycle (default behavior)
  // - `update`: second render cycle
  useEffect(() => {
    console.log('[AppInfo.js] useEffect');
    // Http request ...
  });

  // It is exectued on `create` cycle (default behavior)
  // It will be re-rendered whenever its dependency (`props.searching`) changes:
  useEffect(() => {
    console.log('[AppInfo.js] useEffect - `searching` value changed')
  }, [props.searching]);

  // It is exectued on `create` cycle (default behavior)
  // It does not have any dependencies to listen for,
  // then it will never run again
  // Equivalent to `ComponentDidMount` event for `class-based` components
  useEffect(() => {
    console.log('[AppInfo.js] useEffect - executed on `create` lifecycle only')
  }, []);

  return(
    <React.Fragment>
      <h1 data-testid="header" className="display-3">Movie Quotes!</h1>
      <div data-testid="subtitle" className="d-flex justify-content-between">
        <p className="lead">React JS application interacting with&nbsp;
          <a href="https://juanroldan.com.ar/movie-quotes-api" target="blank">MovieQuotes API</a>
        </p>
        <p className="lead">
          <a data-testid="source-link" href="https://github.com/juanroldan1989/react-movie-quotes" target="blank">
            source <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </React.Fragment>
  )
};

// Helps developers to use components correctly by using the right type of props
AppInfo.propTypes = {
  searching: PropTypes.bool
};

export default React.memo(AppInfo);

// `useEffect`
// `ComponentDidMount` and `ComponentDidUpdate` (`class-based` component events) combined in 1 effect
// Applies for `functional` components only since within functional components
// we don't have a lifecycle in the same way we have for `class-based` components

// `React.memo`
// Optimization for `functional` components.
// React will memoize, store a snapshot of this component, and it will only change
// whenever its props/inputs change, otherwise it will remain untouched.
// Whenever a `parent` component wants to update this component,
// React will give back that stored snapshot.
// It's still an extra validation React needs to do, it doesn't come for free.
// Not every component should have this extra validation

// `shouldComponentUpdate`
// Optimization for `class-based` components.
// It's still an extra validation React needs to do, it doesn't come for free.
// Not every component should have this extra validation

// `React.memo` & `shouldComponentUpdate`
// For all/most scenarios where a `parent` component will need to update this component,
// we should NOT implement this validation.
