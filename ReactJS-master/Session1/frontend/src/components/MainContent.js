import React, {Component} from 'react';
import GirlImages from './GirlImages';

class MainContent extends Component {
    
    render() {
        const allImages = this.props.images.map(img => (<GirlImages key={img._id} img={img} />));
        return (
            <div className="container mt-3">
                <div className="card-columns">
                    {this.props.images.length > 0
                    ? allImages
                    : ""}
                </div>
            </div>
                
        );
    }
}
export default MainContent;