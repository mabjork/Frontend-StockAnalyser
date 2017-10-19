import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import EquityList from "./EquityList";

class EquityPage extends React.Component {
    render(){
        return (
            <div className="container-fluid justify-content-center" style={{marginTop:"5vh"}}>
                <EquityList equities={this.props.equities}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        equities:state.equity.equities
    };
}
export default connect(mapStateToProps)(EquityPage)