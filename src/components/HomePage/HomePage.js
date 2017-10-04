import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import {userActions} from "../../actions"

class HomePage extends React.Component {
    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                lollll
            </div>
        );
    }
}
function mapStateToProps(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {
        user,
        users
    };

}
const connectedHomePage = connect(mapStateToProps)(HomePage);
export {connectedHomePage as HomePage}