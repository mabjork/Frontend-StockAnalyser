import React from "react";
import { connect } from 'react-redux'

class CurrencyInfoPage extends React.Component {
    render(){
        return (
            <div className="container" style={{marginTop:"5vh"}}>
                <div className="row justify-content-center">
                    <h2 className="text-center">{this.props.selected.name} [{this.props.selected.symbol}]</h2>

                </div>
                <div className="row justify content-center">
                    <p>
                        this page vil show info about the selected currency
                    </p>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        selected:state.currency.selected
    };
}
export default connect(mapStateToProps)(CurrencyInfoPage)