/* jshint ignore: start*/
import React, {Component} from 'react';

class SearchField extends Component {
    render() {
        return (
            <form className="form-inline col-sm-3">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search something..."/>
                <div class="input-group-prepend">
                    <span className="input-group-text btn">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
            </div>
        </form>
        );
    }
}

export default SearchField;
/* jshint ignore: end*/
