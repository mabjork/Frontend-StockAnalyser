import React from 'react';
import { Router } from 'react-router-dom';
import { Route, Switch,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from "../helpers/history"
import { alertActions } from '../actions/alertActions';
import { PrivateRoute } from '../helpers/PrivateRoute';
import  HomePage  from './HomePage';
import  LoginPage  from './LoginPage';
import  RegisterPage from './RegisterPage'
import  CustomNavbar from "./Navbar"
import EquityPage from "./EquityPage";
import EquityDataPage from "./EquityDataPage";
import NotFoundPage from "./NotFoundPage";
import EquityInfoPage from "./EquityInfoPage";
import CurrencyPage from "./CurrencyPage";
import CurrencyDataPage from "./CurrencyDataPage";
import CurrencyInfoPage from "./CurrencyInfoPage"


class App extends React.Component{


    render(){
        return(
            <div>
                <CustomNavbar/>
                <div >
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/equities/:symbol/info" component={EquityInfoPage} />
                        <Route path="/equities/:symbol" component={EquityDataPage} />
                        <Route exact path="/equities" component={EquityPage} />
                        <Route path="/currencies/:symbol/info" component={CurrencyInfoPage} />
                        <Route path="/currencies/:symbol" component={CurrencyDataPage} />
                        <Route exact path="/currencies" component={CurrencyPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path='/404' component={NotFoundPage} />
                        <Redirect from='*' to='/404' />
                    </Switch>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
    };
}
export default connect(mapStateToProps)(App);