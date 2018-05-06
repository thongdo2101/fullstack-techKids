import React, { Component } from "react";
import axios from "../axios";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";

class HomeScreen extends Component {
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
      <div>
        <Navbar
          onSearchChanged={this._onSearchChanged}
          onLogin={this.props.onLogin}
          username={this.props.username}
        />
        <MainContent images={displayImages} />
      </div>
    );
  }
}
export default HomeScreen;
