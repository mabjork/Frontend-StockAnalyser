import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import {userActions} from "../actions/userActions"

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="row justify-content-center">
                        <h2>The Financinator</h2>
                    </div>
                    <div className="row justify-content-center">
                        This site displays financial data.
                    </div>
                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {

    };

}
export default connect(mapStateToProps)(HomePage)