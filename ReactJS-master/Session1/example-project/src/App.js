/* jshint ignore: start*/
import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';
import axios from './axios';
import MainContent from './components/MainContent';



class App extends Component {
  // state, props
  state = {
    images: []
  }

  componentDidMount() {
    axios.get("/api/images")
    .then(data => {
      setTimeout(() => {
        this.setState({images: data.data});
      }, 1000);
    })
    .catch(err => console.error(err));
  }


  render() {
    return (
      <div className="App">
        <Navbar images={this.state.images}/>
        <MainContent images={this.state.images}/>
      </div>
    );
  }
}

export default App;
/* jshint ignore: end*/
