import React from 'react';
import { connect } from 'react-redux'
import agent from "../agent";
import CurrencySideMenu from "./CurrencySideMenu";
import GraphPage from "./GraphPage";
import {equityConstants} from "../constants/equityConstants";
import { Route, Switch,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import  HomePage  from './HomePage';
import NotFoundPage from "./NotFoundPage"
import CurrencyGraphPage from "./CurrencyGraphPage"

class CurrencyDataPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render(){
        return (
            <div className="d-flex container-fluid" style={{padding:0,height:"100%"}}>
                <div className="col-md-auto" style={style.sidemenu}>
                    <CurrencySideMenu symbol={this.props.selected.symbol}/>
                </div>
                <div className="col" >
                    <div className="row justify-content-center align-items-center" style={{minHeight:"92vh"}}>
                        <Switch>
                            <Route exact path="/currencies/:symbol/:datafunction" component={CurrencyGraphPage} />
                            <Route path='/404' component={NotFoundPage} />
                            <Redirect from='*' to='/404' />
                        </Switch>
                    </div>
                </div>
            </div>

        );
    }
}

const style = {
    customRow:{
        marginRight:0
    },
    dataContainer:{
        margin:0,
        padding:0,
        overflowX:"hidden"

    },
    sidemenu:{
        margin:0,
        padding:0,
        overflowY: "auto",
        maxHeight:"100%",
        background:"#2c3e50"

    },

};

function mapStateToProps(state) {
    return {
        currencies:state.currency.currencies,
        selected:state.currency.selectedCurrency
    };
}


export default connect(mapStateToProps)(CurrencyDataPage)