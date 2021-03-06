import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import  ProfileIcon from "react-icons/lib/md/person"
import { connect } from 'react-redux'
import ProfileMenu from "./ProfileMenu"

class CustomNavbar extends React.Component {

    render() {
        if(this.props.loggedIn){
            return LoggedInNavbar();
        }
        return LoggedOutNavbar();
    }
}
const LoggedOutNavbar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{height:"7%"}}>
            <a href="/" className="navbar-brand">Finansinator</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar6">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-stretch" id="navbar6">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Sign in
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">
                            Sign up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
const LoggedInNavbar = () =>{
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{height:"7%"}}>
            <a href="/" className="navbar-brand">Finansinator</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar6">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-stretch" id="navbar6">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/equities" className="nav-link">
                            Equities
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/currencies" className="nav-link">
                            Currencies
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/sectors" className="nav-link">
                            Sectors
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto" style={{cursor:"pointer"}}>
                    <ProfileMenu/>
                </ul>
            </div>
        </nav>
    );
};
function mapStateToProps(state) {
    return {
        loggedIn:state.auth.loggedIn
    }
}
export default connect(mapStateToProps)(CustomNavbar)



Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
};