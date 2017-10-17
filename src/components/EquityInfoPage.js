import React from "react";
import { connect } from 'react-redux'

class EquityInfoPage extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="text-center">{this.props.selected.name} [{this.props.selected.symbol}]</h2>

                </div>
                <div className="row justify content-center">
                    <p>
                        this page vil show info about the selected equity
                    </p>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        selected:state.equity.selectedEquity
    };
}
export default connect(mapStateToProps)(EquityInfoPage)