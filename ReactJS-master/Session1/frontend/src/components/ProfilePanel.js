import React, { Component } from "react";

class ProfilePanel extends Component {
  render() {
    const display = this.props.username ? (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text btn">
            <i className="fa fa-camera" />
          </span>
        </div>
        <div className="input-group-prepend">
          <span className="input-group-text btn">
            <i className="fa fa-align-justify" />
          </span>
        </div>
        <input type="text" className="form-control" placeholder={this.props.username} />
      </div>
    ) : (
      <button
        className="btn btn-primary btn-block"
        onClick={this.props.onLogin}
      >
        Login
      </button>
    );
    return <div className="col-sm-3 ">{display}</div>;
  }
}
export default ProfilePanel;
