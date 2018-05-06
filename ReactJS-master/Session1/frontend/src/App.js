import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "./axios";
import HomeScreen from "./containers/HomeScreen";
import DetailScreen from "./containers/DetailScreen";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  state = {};
  _onLogin = () => {
    axios
      .post("/api/auth", {
        username: "admin",
        password: "123456"
      })
      .then(response => {
        this.setState({
          username: response.data.username,
          id: response.data.id
        });
        console.log(response);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <HomeScreen
                    {...props}
                    username={this.state.username}
                    onLogin={this._onLogin}
                  />
                );
              }}
            />
            <Route
              path="/images/:imageId"
              render={props => {
                return (
                  <DetailScreen
                    {...props}
                    username={this.state.username}
                    onLogin={this._onLogin}
                  />
                );
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
