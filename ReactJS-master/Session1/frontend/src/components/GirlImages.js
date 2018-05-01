import React, {Component} from 'react';
import config from '../config';

class GirlImages extends Component {
    render() {
        var createdAt = (new Date(this.props.img.createdAt)).toLocaleDateString();
        return (
            <div class="card">
                <div class="position-absolute info1 btn" data-toggle="modal" data-target="#detailPost">
                    <span class="input-group-text bg-white" id="basic-addon1">
                        <i class="fa fa-plus detail"></i>
                    </span>
                </div>
                <img class="card-img-top" src={config.rootpath + this.props.img.imageUrl} alt={this.props.img.title} />
                <div class="card-body position-relative">
                    <div class="position-absolute row w-100 text-center info">
                        <div class=" col-sm-4 d-flex flex-column">
                            <i class="fa fa-eye"></i>
                            <i class="font-sm">{this.props.img.view}</i>
                        </div>
                        <div class=" col-sm-4 d-flex flex-column">
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                            <i class="font-sm">{createdAt}</i>
                        </div>
                        <div class=" col-sm-4 d-flex flex-column">
                            <i class="fa fa-plus"></i>
                            <i class="font-sm">{this.props.img.like}</i>
                        </div>
                    </div>
                    <div class="row">
                        <img src={config.rootpath + this.props.img.imageUrl} alt={this.props.img.title} class="rounded-circle avt" />
                        <div class="pl-2">
                            <h5 class="card-title">{this.props.img.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        </div>
                    </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's 
                    content.</p>
                </div>
            </div>
        );
    }
}
export default GirlImages;