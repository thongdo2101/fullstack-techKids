/* jshint ignore: start*/
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";
import axios from "./axios";
import MainContent from "./components/MainContent";

class App extends Component {
  // state, props
  state = {
    images: [],
    searchString: ""
  };

  _onSearchChanged = text => {
    this.setState({
      searchString: text
    });
  };

  componentDidMount() {
    axios
      .get("/api/images")
      .then(data => {
        setTimeout(() => {
          this.setState({
            images: data.data
          });
        }, 1000);
      })
      .catch(err => console.error(err));
  }

  render() {
    const displayImages = this.state.images.filter(
      img =>
        img.title.includes(this.state.searchString) ||
        img.description.includes(this.state.searchString)
    );
    return (
      <div className="App">
        <Navbar onSearchChanged={this._onSearchChanged} />
        <MainContent images={displayImages} />
      </div>
    );
  }
}

export default App;
/* jshint ignore: end*/
