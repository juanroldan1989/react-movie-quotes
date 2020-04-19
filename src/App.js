import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app container">
          <div className="jumbotron">
            <h1 className="display-3">Movie Quotes!</h1>
            <p className="lead">Choose Life. Choose a job. Choose a career. Choose a family.</p>
            <hr className="my-4"></hr>
            <p>ReactJS application interacting with MovieQuotes API : )</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
