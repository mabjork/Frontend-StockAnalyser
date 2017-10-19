import React from 'react';
import { connect } from 'react-redux'
import agent from "../agent";
import SideMenu from "./SideMenu";
import GraphPage from "./GraphPage";
import {equityConstants} from "../constants/equityConstants";
import { Route, Switch,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import  HomePage  from './HomePage';
import NotFoundPage from "./NotFoundPage"
import {equityService} from "../services/equityService"

class EquityDataPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        /*
        this.props.onLoad(Promise.all([
            agent.EquityData.get(this.props.match.params.symbol)
        ]));
        */
        equityService.getData(this.props.match.params.symbol,this.props.match.params.function,15);

    }

    render(){
        return (
            <div className="d-flex container-fluid" style={{padding:0}}>
                <div className="col-md-auto" style={style.sidemenu}>
                    <SideMenu symbol={this.props.selected.symbol}/>
                </div>
                <div className="col" >
                    <div className="row justify-content-center align-items-center" style={{minHeight:"92vh"}}>
                        <Switch>
                            <Route exact path="/equities/:symbol/:function" component={GraphPage} />
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
        equities:state.equity.equities,
        selected:state.equity.selectedEquity
    };
}

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: equityConstants.EQUITY_DATA_LOADED,payload: payload}),
    onUnload: () =>
        dispatch({ type: equityConstants.EQUITY_DATA_UNLOADED })
});
export default connect(mapStateToProps,mapDispatchToProps)(EquityDataPage)