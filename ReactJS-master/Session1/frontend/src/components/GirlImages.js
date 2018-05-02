import React, {Component} from 'react';
import config from '../config';

class GirlImages extends Component {
    render() {
        var createdAt = (new Date(this.props.img.createdAt)).toLocaleDateString();
        return (
            <div className="card">
                <div className="position-absolute info1 btn" data-toggle="modal" data-target="#detailPost">
                    <span className="input-group-text bg-white" id="basic-addon1">
                        <i className="fa fa-plus detail"></i>
                    </span>
                </div>
                <img className="card-img-top" src={config.rootpath + this.props.img.imageUrl} alt={this.props.img.title} />
                <div className="card-body position-relative">
                    <div className="position-absolute row w-100 text-center info">
                        <div className=" col-sm-4 d-flex flex-column">
                            <i className="fa fa-eye"></i>
                            <i className="font-sm">{this.props.img.view}</i>
                        </div>
                        <div className=" col-sm-4 d-flex flex-column">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            <i className="font-sm">{createdAt}</i>
                        </div>
                        <div className=" col-sm-4 d-flex flex-column">
                            <i className="fa fa-plus"></i>
                            <i className="font-sm">{this.props.img.like}</i>
                        </div>
                    </div>
                    <div className="row">
                        <img src={config.rootpath + this.props.img.imageUrl} alt={this.props.img.title} className="rounded-circle avt" />
                        <div className="pl-2 col-9">
                            <h5 className="card-title">{this.props.img.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{this.props.img.description}</h6>
                        </div>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's 
                    content.</p>
                </div>
            </div>
        );
    }
}
export default GirlImages;