import React, { useEffect } from 'react';

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
      <h1 className="display-3">Movie Quotes!</h1>
      <div className="d-flex justify-content-between">
        <p className="lead">React JS application interacting with&nbsp;
          <a href="https://juanroldan.com.ar/movie-quotes-api" target="_blank">MovieQuotes API</a>
        </p>
        <p className="lead">
          <a href="https://github.com/juanroldan1989/react-movie-quotes" target="_blank">
            source <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </React.Fragment>
  )
};

export default AppInfo;

// `useEffect`
// `ComponentDidMount` and `ComponentDidUpdate` (`class-based` component events) combined in 1 effect
// Applies for `functional` components only since within functional components
// we don't have a lifecycle in the same way we have for `class-based` components
