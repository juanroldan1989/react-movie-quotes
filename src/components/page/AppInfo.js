import React from 'react';

const AppInfo = () => {
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
