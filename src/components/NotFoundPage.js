

import React from 'react';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {userActions} from "../actions/userActions"

class NotFoundPage extends React.Component {
    render(){
        return(
            <div>
                Page not found.
            </div>
        );
    }
}
export default NotFoundPage;