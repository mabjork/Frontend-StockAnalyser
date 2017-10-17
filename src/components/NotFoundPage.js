

import React from 'react';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {userActions} from "../actions/userActions"

class NotFoundPage extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="justify-content-center text-center" style={{marginTop:"10vh"}}>
                    <h2><a href="" className="text-dark">404. This is not the page you are looking for.</a></h2>
                </div>
            </div>
        );
    }
}
export default NotFoundPage;