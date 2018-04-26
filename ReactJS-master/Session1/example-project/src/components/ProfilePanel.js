import React, {Component} from 'react';

class ProfilePanel extends Component {
    render() {
        return (
            <div className="col-sm-3 ">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text btn">
                            <i className="fa fa-camera"></i>
                        </span>
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text btn">
                            <i className="fa fa-align-justify"></i>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Thong Do" />
                </div>
            </div>
        );
    }
}
export default ProfilePanel;