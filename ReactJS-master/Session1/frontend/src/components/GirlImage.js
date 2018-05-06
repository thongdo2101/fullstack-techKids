import React, { Component } from "react";
import config from "../config";

class GirlImage extends Component {
  render() {
    // var createdAt = new Date(this.props.img.createdAt).toLocaleDateString();
    const comments =this.props.img.comment ? this.props.img.comment.map(comment => {
      console.log(comment.createdBy.username);
      return (
        <p key={comment._id} style={{ borderTop: "1px solid #cccccc" }}>
          <span
            className="font-weight-bold"
            
          >
            {comment.createdBy.username}
          </span>
          :
          {comment.content}
        </p>
      );
    }) : "";
    return (
      <div>
        <img
          className="img-fluid"
          src={config.rootpath + this.props.img.imageUrl}
          alt={this.props.img.title}
        />
        <h5>{this.props.img.title}</h5>
        <p>{this.props.img.description}</p>
        {comments}
      </div>
    );
  }
}
export default GirlImage;
