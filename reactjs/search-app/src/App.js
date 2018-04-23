/* jshint ignore: start */
import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Search App</h1>
          <p> This is a paragraph</p>
          <SearchForm />
        </Jumbotron>;
        </div>
    );
  }
}

export default App;
/* jshint ignore: end */
