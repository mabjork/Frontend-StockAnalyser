import React from "react";
import { connect } from 'react-redux'

class UserSettingsPage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="row">

                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{

    }
}

export default connect(mapStateToProps)(UserSettingsPage)