/* jshint ignore: start*/

import React, {Component} from 'react';
import SearchField from './SearchField';
import ProfilePanel from './ProfilePanel';
import logo from '../img/Logo.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container text-center">
                    <SearchField onSearchChanged={this.props.onSearchChanged}/>
                    <div className="col-sm-6 site_logo">
                        <Link to="/">
                            <img src={logo} alt="TechKids Hot Girls Logo"/> HOT GIRLS
                        </Link>
                    </div>
                    <ProfilePanel 
                        username={this.props.username}
                        onLogin={this.props.onLogin}
                    />
                </div>
            </nav>
        );
    }
}

export default Navbar;
/* jshint ignore: end*/
