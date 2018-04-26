/* jshint ignore: start*/
import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';
import axios from 'axios';
import config from './config';
class App extends Component {
  componentDidMount() {
    console.log(config.rootpath);
    axios.get(config.rootpath + "/api/images")
    .then(data => console.log(data.data))
    .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
/* jshint ignore: end*/
