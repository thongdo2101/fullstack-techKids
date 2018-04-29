/* jshint ignore: start*/

import React, {Component} from 'react';
import SearchField from './SearchField';
import ProfilePanel from './ProfilePanel';
import logo from '../img/Logo.png';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container text-center">
                    <SearchField />
                    <div className="col-sm-6 site_logo">
                        <a href="#!/">
                            <img src={logo} alt="TechKids Hot Girls Logo"/> HOT GIRLS
                        </a>
                    </div>
                    <ProfilePanel />
                </div>
            </nav>
        );
    }
}

export default Navbar;
/* jshint ignore: end*/
