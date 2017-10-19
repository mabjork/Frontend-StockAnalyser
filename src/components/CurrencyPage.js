import React from "react";
import CurrencyList from "./CurrencyList"
import { connect } from 'react-redux'

class CurrencyPage extends React.Component {
    render(){
        return(
            <div className="container-fluid justify-content-center" style={{marginTop:"5vh"}}>
                <CurrencyList currencies={this.props.currencies}/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        currencies:state.currency.currencies
    };
}
export default connect(mapStateToProps)(CurrencyPage)