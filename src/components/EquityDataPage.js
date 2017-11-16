import React from 'react';
import { connect } from 'react-redux';
import SideMenu from "./SideMenu";
import GraphPage from "./GraphPage";
import { Route, Switch,Redirect } from 'react-router-dom';

import NotFoundPage from "./NotFoundPage"

class EquityDataPage extends React.Component {
    constructor(props) {
        super(props);
    }



    render(){
        return (
            <div className="d-flex container-fluid" style={{padding:0,height:"100%"}}>
                <div className="col-md-auto" style={style.sidemenu}>
                    <SideMenu symbol={this.props.selected.symbol}/>
                </div>
                <div className="col" >
                    <div className="row justify-content-center align-items-center" style={{height:"100%"}}>
                        <Switch>
                            <Route exact path="/equities/:symbol/:datafunction" component={GraphPage} />
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
        padding:0,
        overflow: "auto",
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


export default connect(mapStateToProps)(EquityDataPage)