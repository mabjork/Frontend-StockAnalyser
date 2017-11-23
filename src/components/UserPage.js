import React from "react";
import { connect } from 'react-redux'
import EquityList from "./EquityList"
import CurrencyList from "./CurrencyList";

class UserPage extends React.Component {
    constructor(props){
        super(props);

    }
    componentWillMount(){

    }
    render(){
        return (
            <div className="container">
                <div className="row">

                </div>
                <div className="row">
                    <div className="col">
                        <EquityList equities={this.props.userEquities}/>
                    </div>
                    <div className="col">
                        <CurrencyList currencies={this.props.userCurrencies}/>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        userEquities:state.equity.userEquities,
        userCurrencies:state.currency.userCurrencies
    }
}

export default connect(mapStateToProps)(UserPage)