import React, { Component } from "react";
import axios from "../axios";
import GirlImage from "../components/GirlImage";
import Navbar from "../components/Navbar";

class DetailScreen extends Component {
  state = {};

  componentDidMount() {
    axios
      .get(`/api/images/${this.props.match.params.imageId}`)
      .then(data => {
        setTimeout(() => {
          this.setState({
            image: data.data
          });
        }, 1000);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Navbar
          onSearchChanged={this._onSearchChanged}
          onLogin={this.props.onLogin}
          username={this.props.username}
        />
        <div className="container mt-3">
          <div className="row">
            <div className="col-6 mr-auto ml-auto">
              {this.state.image ? <GirlImage img={this.state.image} /> : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailScreen;
